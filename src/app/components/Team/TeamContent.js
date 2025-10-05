import React from 'react'
import CommonHeading from '@/app/utils/CommonHeading'
import Redirect_Link from '@/app/utils/Redirect_txt'

export default function TeamContent() {
  return (
    <div className='py-30  parallax'>
      <CommonHeading heading={'Driven by Passion, United by Purpose'}/>
      <div className='mt-30'>
       <Redirect_Link text="explore team" link=""/>
       </div>
    </div>
  )
}
