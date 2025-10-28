import React from 'react'
import CommonHeading from '@/website/utils/CommonHeading'
import Paragraph from '@/website/utils/Paragraph'
export default function ContentSec() {
  return (
    <div className='fade-up mr-auto h-[100%]  max-w-[100%] lg:max-w-[calc(76%+6px)] flex flex-col justify-start'>
      <CommonHeading customClass={'pb-[20px] lg:pb-[40px] text-[#113120]'} heading="The Arc of Real Estate"/>
      <Paragraph customClass='lg:mt-5 !mb-0 text-[#113120] ' paragraph={"In cities built on straight lines, we follow the Arc; where structure meets soul, nature softens steel, and community replaces mass. Arqis follows the Arc; not a design, a philosophy that bends towards clarity, connection, and continuity; building not walls, but curves that connect, inspire, and endure. "}/>
    </div>
  )
}
