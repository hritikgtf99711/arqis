import React from 'react'
import HeadingLogo from './HeadingLogo'
import NewsLogos from './NewsLogos'

export default function MediaContainer({newsData}) {
  newsData=newsData?.data
  return (
    <div className='2xl:max-w-[1520px] xl:max-w-[1280px] mx-[auto]'>
        <HeadingLogo/>
        <NewsLogos newsData={newsData}/>
    </div>
  )
}
