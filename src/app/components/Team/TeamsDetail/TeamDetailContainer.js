import React from 'react'
import ScrollLayout from '@/app/utils/ScrollLayout'
import TeamImage from './TeamImage'
import TeamDetailContent from './TeamDetailContent'

export default function TeamDetailContainer({onClose}) {
  return (
    <ScrollLayout
    leftContent={<TeamImage/>}
    rightContent={<TeamDetailContent onClose={onClose}/>}
    isShowDrag={false}
    />
  )
}
