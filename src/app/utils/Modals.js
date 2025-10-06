'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ScrollLayout from './ScrollLayout'

export default function Modals({ MediaContent ,scrollableRef}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div className='fixed bg-[#f7efe19c] top-0 left-0 h-full w-full z-[999]'>
      <ScrollLayout 
        rightContent={<MediaContent />}
        scrollableRef={scrollableRef}
      />
    </div>,
    document.body
  )
}