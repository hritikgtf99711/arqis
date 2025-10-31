"use client"
import React from 'react'
import ContentSec from './ContentSec'
import Jobs from './Jobs'
import ScrollLayout from '@/website/utils/ScrollLayout'
import { useRef } from 'react'
export default function CareerContainer({jobsData}) {
        const scrollableRef = useRef(null);
  
  return (
   <ScrollLayout
      leftContent={<ContentSec />}
      rightContent={<Jobs jobsData={jobsData} />}
      scrollableRef={scrollableRef}
      isShowDrag={true}
    />
  )
}

