"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Lobster_Two } from 'next/font/google';
const lobster = Lobster_Two({ subsets: ['latin'], weight: '400' });
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Services', href: '/services' },
  { name: 'upgrade', href: '/upgrade' },
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
  

    let username = localStorage.getItem('username');

// Check if username exists and capitalize it
if (username) {
  username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
}
    if (username) {
      try {
         
        setFirstLetter(username); 
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
    <div className="bg-[#F2FFF9]  h-[60px] flex items-center">
    {cardshow && (
      <div className="absolute top-[60px] right-[10px] w-[120px] h-[100px] bg-white shadow-lg rounded-md border flex flex-col items-center justify-center z-[50]">
        <button onClick={logout} className="px-4 py-2 bg-[#007AFF] text-white rounded-md hover:bg-blue-700">
          Log Out
        </button>
      </div>
    )}
    <nav className="flex justify-between w-full items-center px-5">
      

<Link href="/"> <div className={`text-[40px] font-bold ${lobster.className}`}>Interveu</div></Link>
      


      {/* <div className="hidden md:flex">
        {navigation.map((menu, index) => (
          <Link key={index} href={menu.href}  className={`ml-5 mr-5 font-bold hover:scale-110 transition-transform duration-300 ${path === menu.href ? 'text-[#007AFF]' : 'text-black'}`}>
            {menu.name}
          </Link>
        ))}
      </div> */}
      
      <div className='font-bold hidden md:block text-indigo-700'>
        {first_letter ? (
          <div className='flex items-center'>
          <div onClick={card}  className="text-center hover:cursor-pointer text-[15px] font-normal  text-black  mx-auto mr-4">
           Hi! {first_letter}
          </div>
          <div className='text-blue-600'>
            <div>
            <Image src="/assets/profile_icon.png" quality={100} width={40} height={40} alt="Profile Picture"/>
            </div>
          </div>
          </div>
        ) : (

          <Link href="/signin" className='h-[42px] w-[146px] block bg-black rounded-3xl hover:bg-[#262626] text-center leading-[42px] text-white'>Sign In</Link>
         
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
        <div className="bg-[#F2FFF9]  flex flex-col h-screen absolute z-40 top-[60px] right-0  w-[50%] md:hidden shadow-lg  transition-all duration-300 ease-in-out">
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
              <div>
              <div onClick={card}  className="text-center hover:cursor-pointer text-2xl bg-indigo-700 text-white rounded-full h-[40px] w-[40px] leading-[40px] mx-auto">
                {first_letter}
              </div>
              <div className='text-blue-600'>
                Image
              </div>
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
