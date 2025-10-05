import Image from 'next/image'
import React from 'react'
import CommonHeading from '@/app/utils/CommonHeading'
import Paragraph from '@/app/utils/Paragraph'
export default function ExperienceContent() {
  return (
    <div className=' parallax'>
        <CommonHeading customClass="text-[#FFD38F]" heading="9+ Years of experience in development"/>
        <div className='m-[auto] my-[70px]'>
            <Image src={'/assets/about/about_1.jpg'} alt='experience' className='w-[100%]' width={'643'} height={468}/>
        </div>
        <div className='mt-5'>
            <Paragraph customClass="text-[#fff]" paragraph="With over 9 years of experience in the development industry, we have honed our skills and expertise to deliver exceptional results. Our journey has been marked by a commitment to quality, innovation, and customer satisfaction. We have successfully completed numerous projects, each reflecting our dedication to excellence and our ability to adapt to the evolving needs of our clients. Our extensive experience enables us to navigate complex challenges and provide solutions that drive growth and success."/>
        </div>
    </div>
  )
}
