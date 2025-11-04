import React from 'react'
import HeadingLogo from './HeadingLogo'
import NewsLogos from './NewsLogos'

export default function MediaContainer({newsData}) {
  // console.log(newsData,"newsData")
  newsData=newsData?.data
  return (
    <div className='media container '>
        <HeadingLogo/>
        <NewsLogos newsData={newsData}/>
    </div>
  )
}
