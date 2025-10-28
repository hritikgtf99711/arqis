import React from 'react'
import ScrollLayout from '@/website/utils/ScrollLayout'
import TeamImage from './TeamImage'
import TeamDetailContent from './TeamDetailContent'
import { useRef } from 'react'

export default function TeamDetailContainer({onClose}) {
  const scrollableRef = useRef(null);
  return (
    <ScrollLayout
    leftContent={<TeamImage/>}
    rightContent={<TeamDetailContent onClose={onClose}/>}
    isShowDrag={false}
    scrollableRef={scrollableRef}
    />
  )
}
