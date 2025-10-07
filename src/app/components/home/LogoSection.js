import React from 'react'
import Image from 'next/image'
export default function LogoSection() {
  return (
    <div className='container'>
    <figure className='m-auto flex  justify-center  h-[98vh]'>
        <Image src='/assets/logo.png' className='w-[40%] no-view   logo-section object-contain' width={300} height={300} alt='Logo Container'/>
    </figure>
    </div>
  )
}
