"use client";
import React, { useEffect, useState } from 'react';
import AddInterview from './_components/AddInterview';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'; 
import FetchInterview from './_components/FetchInterview';

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 
  

  useEffect(() => {
    const auth = async () => {
      const username = localStorage.getItem('username');
      if (!username) {
        console.log("No")
        router.push('/signin');
        return;
      }
      try {
        

        const response = await fetch(`https://intervue2-wgit3nni.b4a.run/auth/validate/${username}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: 'include',
        });
        

        if (!response.ok) {
            
            
            router.push('/signin');
        } else {
          
          setLoading(false); 
        }
      } catch (error) {
          
        router.push('/signin');
      }
    };
    auth();
  }, [router]);

  

  if (loading) {
    return <p>Loading...</p>; 
  }

  

  return (
    <div className="px-10 py-6">
      <ToastContainer />
      <h1 className="mt-6 text-3xl font-bold text-indigo-700">Dashboard</h1>
      <p className="text-gray-500 mb-10">Create and Start your AI Mock Interview</p>
      <AddInterview />

      
      <FetchInterview/>


    </div>
  );
};

export default Page;
