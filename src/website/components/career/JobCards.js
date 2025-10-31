import React from 'react'
import Redirect_Link from '@/website/utils/Redirect_txt'

export default function JobCards({jobs}) {
  return (
       <div  className='job-card border-[1px] border-[#FFE0AF] p-[30px] mb-[40px] lg:mb-[60px] w-[100%] lg:w-[100%]'>
            <span className='text-white uppercase'>{jobs.job_title}</span>
            <h3 className='text-[#FFE0AF] uppercase tracking-[2] text-[18px] mt-[10px]'>{jobs.location}</h3>

            <Redirect_Link  customClass={`mt-[50px] change_icon_clr text-white`} text={`apply Now`} link={``}/>
        </div>
  )
}
