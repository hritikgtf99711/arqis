import React from 'react'
import Paragraph from '@/app/utils/Paragraph'
import Image from 'next/image'
export default function BlogCard() {
  return (
    <div className='blog-card'>
        <Image src={`/assets/blog/blog_1.jpg`} className='fade-up' alt='' height={338} width={430}/>
      <Paragraph customClass={'mt-6 fade-up text-[20px]'} paragraph={'How Modern Flats in Noida Are Adopting Sustainable Living?'}/>
    </div>
  )
}
