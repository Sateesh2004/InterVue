"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useEffect } from 'react';
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Services', href: '/services' },
  { name: 'Upgrade', href: '/upgrade' },
];
const NavBar = () => {
  const [first_letter,setFirstLetter]=useState("")
  const [cardshow,setCardShow]=useState(false)
  const card = ()=>{
    setCardShow(!cardshow)
  }
  const logout =async ()=>{
   
    const response =await fetch("http://localhost:3001/auth/logout",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      credentials: 'include',
    })
    if (response.ok) {
      window.location.href = "/"; 
    }
    localStorage.removeItem('username');
    

  }

  const username = localStorage.getItem('username');
  useEffect(() => {
    if (username) {
      try {
         
        setFirstLetter(username.charAt(0).toUpperCase()); 
      } catch (error) {
      }
    }
  }, []);
  
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-200 h-[60px] flex items-center">
      {cardshow && (
        <div className="absolute top-[60px] right-[10px] w-[120px] h-[100px] bg-white shadow-lg rounded-md border flex flex-col items-center justify-center z-[50]">
          <button onClick={logout} className="px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-blue-700">
            Log Out
          </button>
        </div>
      )}
      
      
      <nav className="flex justify-between w-full items-center">
        <div className="ml-5 text-black font-bold text-[30px]">Inter<span className='text-indigo-700'>Vue</span></div>

        <div className="hidden md:flex">
          {navigation.map((menu, index) => (
            <Link key={index} href={menu.href} className={`mr-5 font-bold ${path===menu.href?'text-indigo-700':'text-black'}`}>
              {menu.name}
            </Link>
          ))}
        </div>
        <div className='mr-5  font-bold hidden md:block text-indigo-700'>

          {first_letter? <div onClick={card} className='hover:cursor-pointer border h-[50px] w-[50px] leading-[50px] bg-indigo-700 rounded-[100px] text-center text-black'>{first_letter}</div> :   <Link href="/signin">Sign In</Link>}
        
          
          
          
           </div>
        <div className='mr-5 text-black font-bold md:hidden hover:cursor-pointer' onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </div>

        {isOpen && (
          <div className="bg-slate-200 flex flex-col absolute top-[60px] right-0  h-[300px] w-[200px] md:hidden">
            {navigation.map((menu, index) => (
              <Link key={index} href={menu.href} className="text-black mr-5">
                {menu.name}
              </Link>
            ))}
            <div className='mr-5 text-black font-bold'>
            {first_letter? <div>{first_letter}</div> :   <Link href="/signin" >Sign In</Link>}

            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
