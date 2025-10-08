import React from 'react'
import CommonHeading from '@/app/utils/CommonHeading'
import Paragraph from '@/app/utils/Paragraph'
export default function ContentSec() {
  return (
    <div className='fade-up mr-auto h-[100%] max-w-[calc(76%+6px)] flex flex-col justify-start'>
      <CommonHeading customClass={'pb-[40px] text-[#113120]'} heading="The Arc of Real Estate"/>
      <Paragraph customClass='mt-5 text-[#113120] ' paragraph={"In cities built on straight lines, we follow the Arc; where structure meets soul, nature softens steel, and community replaces mass. Arqis follows the Arc; not a design, a philosophy that bends towards clarity, connection, and continuity; building not walls, but curves that connect, inspire, and endure. "}/>
    </div>
  )
}
