import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Outfit } from 'next/font/google'
const outfit = Outfit({
    subsets: ['latin'],
    weights: [100, 200, 300, 400, 500, 600, 700],
  });
const CTA = () => {
  return (
    <Link className={`bg-black hover:bg-[#262626] ${outfit.className} rounded-[100px] flex justify-center items-center leading-[55px] text-white  font-[16px] w-[200px] h-[55px]  sm:mt-10 mt-8   transition`}
    href="/dashboard">Get started 
    <div className='ml-3'>
    <Image 
        src="/assets/star_group.png" 
        alt="Description of the image" 
        width={30}
        height={30}
      />
      </div>
    </Link>
  )
}

export default CTA
