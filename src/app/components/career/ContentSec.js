import React from 'react'
import CommonHeading from '@/app/utils/CommonHeading'
import Image from 'next/image'
export default function ContentSec() {
  return (
    <div className=' m-auto h-[100%] flex flex-col justify-center'>
        <div className='max-w-[80%]'>
      <CommonHeading heading={`Opportunity with ARQIS GROUP`}/>
      </div>    
      <figure className='mt-[30px]'>
        <Image src={`/assets/career/career.jpg`} alt='career' width={450} height={340}/>
      </figure>
    </div>
  )
}
