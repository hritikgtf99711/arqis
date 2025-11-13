import React from 'react'
import Image from 'next/image'

export default function IconItem({ items = [] }) {
  return (
    <div className='grid grid-cols-3 gap-[30px] gap-y-[80px] pt-[90px]'>
      {items.map((item, index) => (
        <div key={index} className='col-span-1'>
          <figure className='text-center'>
            <Image src={item.src} className='mx-auto' width={60} height={60} alt=''/>

            <figcaption className='text-[var(--secondary-color)] max-w-[70%] mx-[auto] font-[200] tracking-[1.2] mt-[20px]'>
             {item.heading && <h3 className='text-[20px] mb-[15px] font-[500] uppercase tracking-[1.4]'>{item.heading}</h3>}
              {item.caption}
            </figcaption>
          </figure>
        </div>
      ))}
         <div className='overlay_gradient lg:block hidden h-[200px] bottom-0 right-0 sticky w-[100%]'>
        </div>
    </div>
  )
} 