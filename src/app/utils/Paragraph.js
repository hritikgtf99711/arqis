import React from 'react'

export default function Paragraph({paragraph,customClass}) {
  return (
    <p className={`${customClass} leading-[1.8] !tracking-[0.4px] mb-[20px]`}>{paragraph}</p>
  )
}
