import React from 'react'

export default function CommonHeading({heading,customClass}) {
  return (
   <h2 className={`text-[40px] tracking-[1.8] font-[200] ${customClass} uppercase`}>{heading}</h2>
  )
}
