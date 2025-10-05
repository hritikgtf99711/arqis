import React from 'react'

export default function Paragraph({paragraph,customClass}) {
  return (
    <p className={`${customClass} leading-[1.5] !tracking-[0.4px]`}>{paragraph}</p>
  )
}
