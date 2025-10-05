import React from 'react'
import CommonHeading from '@/app/utils/CommonHeading'
import BlogCard from './BlogCard'
export default function BlogContainer() {
  return (
    <div className='container'>
        <CommonHeading customClass={'fade-up'} heading={`Discover insights. Ignite imagination.`}/>
        <div className='grid grid-cols-3 gap-20 mt-[35px]'>
        <div className='col-span-1'>
        <BlogCard/>
        </div>
        <div className='col-span-1'>
        <BlogCard/>
        </div>
        <div className='col-span-1'>
        <BlogCard/>
        </div>
        </div>
    </div>
  )
}
