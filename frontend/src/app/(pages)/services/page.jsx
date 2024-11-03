// pages/services.js

import Footer from "@/components/Footer";
import React from "react";

const Services = () => {
  return (

    <div>
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
    <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
    <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                            decentralized network that combines a smart contract and a frontend user interface.</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                            focus on understanding and analyzing data to provide a semantic web.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                            to assess the extent up to which project management standards are being upheld.</p>
                    </div>
                </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                            defenses and exploiting weaknesses in a computer system or network.</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                            that eliminate a large amount of manual work and accelerate the development process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<br />
<br />
<br />
<br />

<div className="font-sans bg-gray-100 px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="text-left ">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">Discover the Future of AI</h2>
          <p className="mb-4  text-gray-600">Unlock your potential with our AI-driven interview solutions. Our platform leverages cutting-edge technology to enhance your interview skills, providing personalized feedback and insights to help you excel.</p>
          <p className="mb-4   text-gray-600">Our advanced algorithms analyze your responses and offer real-time suggestions, enabling you to refine your answers and boost your confidence. Whether you’re preparing for a technical interview or a behavioral assessment, our tools are designed to make you stand out.</p>
          <p className=" text-gray-600">Experience the difference with our intuitive platform that adapts to your unique learning style. From mock interviews to tailored question sets, we provide a comprehensive suite of resources to ensure you are fully prepared.</p>
          <p className=" text-gray-600">Join a community of learners who are embracing the future of interview preparation. With our AI solutions, you’ll gain the skills and confidence needed to succeed in any interview scenario.</p>
        </div>
        <div>
          <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" />
        </div>
      </div>
    </div>



    <Footer/>
</div>

  );
};

export default Services;
