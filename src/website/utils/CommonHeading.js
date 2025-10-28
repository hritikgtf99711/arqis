import React from 'react'

export default function CommonHeading({heading,customClass}) {
  return (
   <h2 className={`2xl:text-[40px] text-[34px] tracking-[1.8] font-[200] ${customClass} uppercase`}>{heading}</h2>
  )
}
