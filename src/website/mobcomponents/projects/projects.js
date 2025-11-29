import React from 'react'
import ProjectContainer from '@/website/components/projects/ProjectContainer'
import CommonHeading from '@/website/utils/CommonHeading'
export default function projects() {
  return (
    <div className=''>
        <div className='container !pt-[40px]'>
        <CommonHeading heading={`Where Shopping Meets Lifestyle`}/>
        </div>
      <ProjectContainer/>
       
    </div>
  )
}
