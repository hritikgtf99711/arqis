import React from 'react'
import Redirect_Link from '@/app/utils/Redirect_txt'

export default function JobCards() {
  return (
       <div  className='job-card border-[1px] border-[#FFE0AF] p-[30px] mb-[20px] lg:mb-[100px] w-[100%] lg:w-[90%]'>
            <span className='text-white uppercase'>New Delhi & Gurugram</span>
            <h3 className='text-[#FFE0AF] uppercase tracking-[2] text-[18px] mt-[10px]'>GM Marketing</h3>

            <Redirect_Link  customClass={`mt-[50px] change_icon_clr text-white`} text={`apply Now`} link={``}/>
        </div>
  )
}
