import React from 'react'
import Image from 'next/image'

export default function TeamImage({teamsData}) {
  return (
    <div>
      <Image src={teamsData.image} alt={teamsData.alt} className='w-[400px] m-auto' height={583} width={500}/>
    </div>
  )
}
