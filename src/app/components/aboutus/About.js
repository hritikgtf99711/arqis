import React from 'react'
import ContentSec from './ContentSec'
import ExperienceContent from './ExperienceContent'

export default function About() {
  return (
    <div className='h-[100%]' >
        <div className='grid h-[100%] grid-cols-1 md:grid-cols-2'>
        <div className='col-span-1'>
            <ContentSec/>
        </div>
        <div className='col-span-1 max-h-[100vh]  py-[100px] overflow-y-scroll bg-[#113120]'>
          <ExperienceContent/>
        </div>
    </div>
    </div>
  )
}
