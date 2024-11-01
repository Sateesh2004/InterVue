"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { useState,useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Webcam } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

const page = () => {
  const { id } = useParams();
  const router = useRouter();
  const[details,setDetails]=useState({
    username:"",
    jobposition:"",
    jobdescription:"",
    yearsofexperience:""
  })
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const auth = async () => {
      const username = localStorage.getItem('username');
      if (!username) {
        router.push('/signin');
        return;
      }

      try {
        

        const response = await fetch(`http://localhost:3001/auth/validate/${username}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: 'include',
          body:JSON.stringify({id})
        });

       
        if(response.status===404){
          router.push('/signin');
        }
        if(response.status===405){
          router.push('/dashboard');
        }
        
        else {
          setLoading(false);
          const result = await response.json()
          const interviewid = result.interviewid
          const { username, jobposition, jobdescription, yearsofexperience } = result.interviewid;
          setDetails({
            ...details,
            username:username,
            jobposition:jobposition,
            jobdescription:jobdescription,
            yearsofexperience:yearsofexperience
          });
          
        }
      } catch (error) {
        router.push('/signin');
      }
    };

    auth();
  }, [router]);
  useEffect(() => {
    
  }, [details]);
  const start = ()=>{
    router.push(`/dashboard/interview/${id}/start`)
  }

  if (loading) {
    return <p>Loading...</p>; 
  }
  return (
    <div className="px-32 py-20 flex gap-10">
  {/* Left Section - Webcam Container */}
  <div className=' rounded-lg w-1/2 h-[450px] p-4'> 
  <div className="bg-gray-100 shadow-lg rounded-lg w-full h-[300px] flex flex-col justify-center items-center p-4">
    
   
    <div className="relative w-[300px] h-[300px]">
    <Image
      src="/robot.png"
      alt="Picture of the author"
      width={300}
      height={300}
      layout="responsive" 
      priority 
    
    />
  </div>

    
  
  </div>
  <br />
  
  <div className='flex justify-between'>
  <div className="flex items-start border rounded-lg text-yellow-700 px-4 py-3 border-yellow-300 bg-yellow-100">
      <Lightbulb className="w-10 h-10 mr-3" />
      <div>
        <p className="font-semibold">Permission Required</p>
        <p className="text-sm">
          Please ensure that microphone and camera permissions are granted for this site. 
          You can check your settings if they are currently turned off.
        </p>
      </div>
    </div>
  
  </div>
  <div className='flex justify-center items-center mt-5 py-2'>
    <button className='px-4 py-2 bg-indigo-700 text-white rounded hover:bg-blue-700' onClick={start}>Start Interview</button>
  </div>
  </div>
  
  {/* Right Section - User Details */}
  <div className="bg-white shadow-lg rounded-lg w-1/2 p-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Candidate Information</h2>
    <div className="space-y-4">
      <div>
        <h1 className="inline text-[18px] font-semibold text-indigo-700">Username: </h1>
        <span className="text-gray-700 text-lg">{details.username || "Not available"}</span>
      </div>
      <div>
        <h1 className="inline text-[18px] font-semibold text-indigo-700">Job Position: </h1>
        <span className="text-gray-700 text-lg">{details.jobposition || "Not available"}</span>
      </div>
      <div>
        <h1 className="inline text-[18px] font-semibold text-indigo-700">Job Description: </h1>
        <span className="text-gray-700 text-lg">{details.jobdescription || "Not available"}</span>
      </div>
      <div>
        <h1 className="inline text-[18px] font-semibold text-indigo-700">Experience: </h1>
        <span className="text-gray-700 text-lg">{details.yearsofexperience || "Not available"}</span>
      </div>
    </div>
  </div>
</div>


  )
}

export default page
