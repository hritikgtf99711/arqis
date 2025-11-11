import React from 'react'
import CommonHeading from '@/website/utils/CommonHeading';
import Paragraph from '@/website/utils/Paragraph';
export default function ContentSec({overviewData}) {
  overviewData=overviewData?.data
  return (
    <div className='fade-up mr-auto h-[100%]  max-w-[100%] lg:max-w-[calc(76%+6px)] flex flex-col justify-start'>
      <CommonHeading customClass={'pb-[20px] lg:pb-[40px] text-[#113120]'} heading={overviewData?.title}/>
      <Paragraph customClass='lg:mt-5 !mb-0 text-[#113120]' paragraph={overviewData?.description}/>
    </div>
  )
}
