import React from 'react'
import Image from 'next/image'
export default function Pagination() {
  return (
    <div className='bg-[var(--primary-green-color)] border-[1px] border-[#ffffff4d] py-[30px]'>
        <div className='container text-center'>
            <span className='uppercase text-white tracking-[2]'>Next Page</span>
            <h4 className='uppercase text-white text-[22px] my-[24px] tracking-[2]'>our team</h4>
            <Image src={`/assets/icons/arrow-white.svg`} width={34} height={34} className='m-auto' alt='Arrow White'/>
        </div>
    </div>
  )
}
