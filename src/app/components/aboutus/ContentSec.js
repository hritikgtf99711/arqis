import React from 'react'
import CommonHeading from '@/app/utils/CommonHeading'
import Paragraph from '@/app/utils/Paragraph'
export default function ContentSec() {
  return (
    <div className='fade-up mr-auto h-[100%] max-w-[calc(76%+6px)] flex flex-col justify-start'>
      <CommonHeading customClass={'pb-[40px] text-[#113120]'} heading="Building with purpose, trust, and vision."/>
      <Paragraph customClass='mt-5 text-[#113120] ' paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}/>
    </div>
  )
}
