import Link from 'next/link'
import React from 'react'

export default function Redirect_Link({text,link,customClass}) {
  return (
     <Link href={link} className={`flex items-center ${customClass} uppercase tracking-[1.5] gap-[6px]`}>{text} <img className='arrow_container' src='/assets/icons/right_arrow.svg' width={'25'} alt='right arrow'/></Link>
  )
}
