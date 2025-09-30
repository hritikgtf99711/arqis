import React from 'react'

export default function Header() {
  return (
     <header className='py-[60px] absolute top-0 w-[100%] '>
      <div className='container mx-[auto]'>
      <div className='flex justify-end gap-10'>
        <img src='./assets/sound.svg' width={'25'} alt="logo"/>
        <div className='flex items-center gap-2'>   
        <span className='uppercase tracking-[2px]'>Menu</span>
        <span className='border-[50%] h-[18px] w-[18px] rounded-full block bg-[#000]'></span>
        </div>
        </div>
        </div>
    </header>
  )
}
