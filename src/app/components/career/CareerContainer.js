import React from 'react'
import ContentSec from './ContentSec'
import Jobs from './Jobs'
import ScrollLayout from '@/app/utils/ScrollLayout'
export default function CareerContainer() {
  return (
   <ScrollLayout
      leftContent={<ContentSec />}
      rightContent={<Jobs />}
            isShowDrag={true}

    />
  )
}
