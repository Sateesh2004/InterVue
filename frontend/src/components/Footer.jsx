import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (

    <footer className=" flex justify-between items-center px-20 py-6 text-black font-[sans-serif] tracking-wide">
    <div>Interveu | All right reserved. Copyright @Interveu</div>
    <div className='flex gap-2'>

      <Link href="https://www.linkedin.com/in/sateesh-kumar-b4a206231/">
      <div>
      <Image
      src="/assets/linkedin-square-icon.svg"
      width={25}
      height={25}
      
      alt="Picture of the author"
    />
      </div>
      </Link>
<Link href="https://x.com/Sateesh1dev">
   
      <div>
      <Image
      src="/assets/x-social-media-logo-icon.svg"
      width={25}
      height={25}
      className='rounded-3xl'
      alt="Picture of the author"
    />
      </div>
      </Link>

      <Link href="https://www.instagram.com/sateesh.dev/">

      <div>
      <Image
      src="/assets/black-instagram-icon.svg"
      width={25}
      height={25}
      alt="Picture of the author"
    />
      </div>
      </Link>




    </div>
    </footer>



   
  )
}

export default Footer
