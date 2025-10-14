import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <div className='px-[30p]'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[60%]"
      >
        <SwiperSlide className='!h-[600px]'>Slide 1</SwiperSlide>
        <SwiperSlide className='!h-[600px]'>Slide 2</SwiperSlide>
        <SwiperSlide className='!h-[600px]'>Slide 3</SwiperSlide>
    
      </Swiper>
    </div>
  );
}
