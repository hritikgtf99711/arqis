import React from 'react'
import Paragraph from '@/app/utils/Paragraph'
import Image from 'next/image'
export default function BlogCard({image,heading,index,setHoveredSlide}) {
  console.log(index)
  return (
    <div className='blog-card' onClick={()=>{setHoveredSlide(index)
      console.log(index)
    }}>
        <Image src={image} className='fade-up' alt='' height={338} width={430}/>
      <Paragraph customClass={'mt-6 fade-up text-[20px]'} paragraph={heading}/>
    </div>
  )
}
