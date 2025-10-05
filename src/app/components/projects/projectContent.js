import React from 'react'
import CommonHeading from '../../utils/CommonHeading'
import Redirect_Link from '@/app/utils/Redirect_txt'
export default function projectContent() {
  return (
    <div className='flex flex-col h-[100%] justify-between'>
        <CommonHeading heading="Where Shopping Meets Lifestyle" customClass="mb-5"/>
        <p className='font-[400] tracking-[2px]  text-[25px] uppercase'>ARQIS Mall</p>
        <Redirect_Link text="Explore More" link=""/>
    </div>
  )
}
