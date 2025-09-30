import React from 'react'

export default function Paragraph({paragraph,customClass}) {
  return (
    <p className={customClass}>{paragraph}</p>
  )
}
