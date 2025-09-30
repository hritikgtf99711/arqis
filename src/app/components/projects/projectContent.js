import React from 'react'
import CommonHeading from '../../utils/CommonHeading'
import Link from 'next/link'
export default function projectContent() {
  return (
    <div className='flex flex-col h-[100%] justify-between'>
        <CommonHeading heading="Where Shopping Meets Lifestyle" customClass="mb-5"/>
        <p className='font-[400] tracking-[2px]  text-[25px] uppercase'>ARQIS Mall</p>
        <Link href={'#'} className='flex items-center uppercase tracking-[1.5] gap-[6px]'>Explore project <img src='/assets/icons/right_arrow.svg' width={'25'} alt='right arrow'/></Link>
    </div>
  )
}
