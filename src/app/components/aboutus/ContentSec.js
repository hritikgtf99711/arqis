import React from 'react'
import CommonHeading from '@/app/utils/CommonHeading'
import Paragraph from '@/app/utils/Paragraph'
export default function ContentSec() {
  return (
    <div className='custom-container m-auto h-[100%] flex flex-col justify-center'>
      <CommonHeading customClass={'pb-[40px]'} heading="Building with purpose, trust, and vision."/>
      <Paragraph className='mt-5' paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
    </div>
  )
}
