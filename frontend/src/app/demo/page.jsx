"use client";
import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const Page = () => {
  useEffect(() => {
    toast.success("Hello World"); // Show a success toast message
  }, []);

  return (
    <div>
      <ToastContainer />
      Hello
    </div>
  );
};

export default Page;
