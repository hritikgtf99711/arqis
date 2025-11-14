import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MetroStationsUI() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categories = [
    { icon: '', label: 'METRO STATIONS', active: true },
    { icon: '', label: 'SCHOOLS', active: false },
    { icon: '', label: 'MALLS', active: false },
    { icon: '', label: 'HOSPITALS', active: false }
  ];

  const stationsData = {
    0: [
      { name: 'Noida Sector 15 Metro Station', time: '8 Minutes' },
      { name: 'Mayur Vihar Phase 1 Metro Station', time: '15 Minutes' },
      { name: 'Akshardham Temple Metro Station', time: '20 Minutes' }
    ],
    1: [
      { name: 'Delhi Public School', time: '5 Minutes' },
      { name: 'Amity International School', time: '12 Minutes' },
      { name: 'Modern School', time: '18 Minutes' }
    ],
    2: [
      { name: 'DLF Mall of India', time: '10 Minutes' },
      { name: 'The Great India Place', time: '15 Minutes' },
      { name: 'Logix City Centre', time: '20 Minutes' }
    ],
    3: [
      { name: 'Fortis Hospital', time: '7 Minutes' },
      { name: 'Max Super Speciality Hospital', time: '12 Minutes' },
      { name: 'Apollo Hospital', time: '18 Minutes' }
    ]
  };

  const stations = stationsData[activeCategory];

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
    setCurrentSlide(index);
    setActiveCategory(index);
  };

  return (
    <div className="min-h-screen s p-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16">
          <div className="flex items-center justify-between">
            <button
              ref={prevRef}
              className="text-amber-200 hover:text-amber-100 transition-colors z-10"
            >
              ←
            </button>

            <div className="flex-1 overflow-hidden mx-4">
              <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                spaceBetween={0}
                slidesPerView={4}
                loop={true}
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.realIndex);
                  setActiveCategory(swiper.realIndex % categories.length);
                }}
                className="mySwiper"
              >
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <SwiperSlide key={index}>
                      <button
                        onClick={() => goToSlide(index)}
                        className={`flex flex-col items-center justify-center gap-3 w-full px-6 py-4 transition-all duration-300 ${
                          activeCategory === index
                            ? 'text-amber-200'
                            : 'text-emerald-300 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <span>
                          {category.label}
                        </span>
                      </button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <button
              ref={nextRef}
              className="text-amber-200 hover:text-amber-100 transition-colors z-10"
            >
              →
            </button>
          </div>
        </div>

        {/* Stations List */}
        <div className="space-y-8">
          {stations.map((station, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-amber-100 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className=" font-light tracking-wide">{station.name}</h3>
              <div className="flex-1 mx-8 border-b border-dashed border-emerald-600" />
              <span className="font-light">{station.time}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}