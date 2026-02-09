import Image from 'next/image'
import React from 'react'

export default function ProjectImage() {
  return (
    <div>
      <Image className='w-full 2xl:max-h-[500px] xl:max-h-[calc(100vh-320px)] object-cover arrow' src={'/assets/projects/project_1.jpg'} width={500} height={500} alt='projectimage'/>
    </div>
  )
}




