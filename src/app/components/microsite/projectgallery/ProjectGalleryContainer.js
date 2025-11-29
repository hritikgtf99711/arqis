import React from 'react'
import ProjectImage from './ProjectImage'
import CommonHeading from '@/website/utils/CommonHeading'

export default function ProjectGalleryContainer() {
  return (
    <div className='container'>
      <CommonHeading heading={`ONCE IN A LIFETIME EXPERIENCE`}/>
      <ProjectImage/>
    </div>
  )
}
