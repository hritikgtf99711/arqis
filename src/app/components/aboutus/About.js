import React from 'react'
import ContentSec from './ContentSec'
import ExperienceContent from './ExperienceContent'
import ScrollLayout from '@/app/utils/ScrollLayout'
export default function About() {
  return (
   <ScrollLayout
      leftContent={<ContentSec />}
      rightContent={<ExperienceContent />}
      isShowDrag={true}
    />

  )
}
