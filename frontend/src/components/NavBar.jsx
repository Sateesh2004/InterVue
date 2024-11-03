"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useEffect } from 'react';
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Services', href: '/services' },
];
const NavBar = () => {
  const [first_letter,setFirstLetter]=useState("")
  const [logger, setLogger] = useState(false);

  const [cardshow,setCardShow]=useState(false)
  const card = ()=>{
    setCardShow(!cardshow)
  }
  const logout =async ()=>{
    try{
      const response =await fetch("https://intervue2-wgit3nni.b4a.run/auth/logout",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials: 'include',
      })
      if (response.ok) {

        
        
        window.location.href = "/"; 
        setLogger(true);
       
      }
    }
    catch(e){
      alert(e.message)
    }
   
   
    
    

  }


  useEffect(() => {
    if (logger) {
      localStorage.removeItem('username');
    }
  }, [logger]);




  useEffect(() => {
    const username = localStorage.getItem('username');
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
        <Link href="/">
     
        <div className="ml-5 text-black font-bold text-[30px]">Inter<span className='text-indigo-700'>Vue</span></div>
        </Link>
        <div className="hidden md:flex">
          {navigation.map((menu, index) => (
            <Link key={index} href={menu.href} className={`mr-5 font-bold ${path === menu.href ? 'text-indigo-700' : 'text-black'}`}>
              {menu.name}
            </Link>
          ))}
        </div>
        
        <div className='mr-5 font-bold hidden md:block text-indigo-700'>
          {first_letter ? (
            <div onClick={card} className='hover:cursor-pointer border h-[50px] w-[50px] leading-[50px] bg-indigo-700 rounded-full text-center text-black'>
              {first_letter}
            </div>
          ) : (
            <Link href="/signin">Sign In</Link>
          )}
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
          <div className="bg-slate-200  flex flex-col h-screen absolute z-40 top-[60px] right-0  w-[50%] md:hidden shadow-lg  transition-all duration-300 ease-in-out">
            {navigation.map((menu, index) => (
              
              <Link
                key={index}
                onClick={()=>{
                  setIsOpen(false)
                }}
                href={menu.href}
                className={`text-black py-2 px-4 font-bold border-b border-slate-300 ${path === menu.href ? 'text-indigo-700' : 'hover:bg-slate-300'}`}
                aria-label={menu.name} // Accessibility enhancement
              >
                {menu.name}
              </Link>
          
            ))}
            <div className="mr-5  text-black font-bold mt-4 mx-4">
              {first_letter ? (
                <div onClick={card}  className="text-center hover:cursor-pointer text-2xl bg-indigo-700 text-white rounded-full h-[40px] w-[40px] leading-[40px] mx-auto">
                  {first_letter}
                </div>
              ) : (
                <Link
                  href="/signin"
                  className="text-indigo-700 font-semibold hover:underline"
                  aria-label="Sign In"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
