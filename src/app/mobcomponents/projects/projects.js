import React from 'react'
import ProjectContainer from '@/app/components/projects/ProjectContainer'
import CommonHeading from '@/app/utils/CommonHeading'
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
