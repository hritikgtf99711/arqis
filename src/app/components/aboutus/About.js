import React from 'react'
import ContentSec from './ContentSec'
import ExperienceContent from './ExperienceContent'
import ScrollLayout from '@/app/utils/ScrollLayout'
import { useRef } from 'react'
export default function About() {
      const scrollableRef = useRef(null);
  
  return (
   <ScrollLayout
      leftContent={<ContentSec />}
      rightContent={<ExperienceContent />}
      isShowDrag={true}
      scrollableRef={scrollableRef}
    />

  )
}
