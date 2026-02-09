import React from 'react'
import ScrollLayout from '@/website/utils/ScrollLayout'
import BlogImage from './BlogImage'
import BlogContent from './BlogContent'
import { useRef } from 'react'

export default function BlogDetailContainer({onClose, blogData}) {
  const scrollableRef = useRef(null);
  return (
    <ScrollLayout
      leftContent={<BlogImage selectedImage={blogData?.image} />}
      rightContent={<BlogContent blogData={blogData} onClose={onClose}/>}
      isShowDrag={false}
      scrollableRef={scrollableRef}
    />
  )
}