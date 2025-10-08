import React, { useRef, useEffect } from 'react';
import DragComponent from './DragComponent';

const ScrollLayout = ({ leftContent, rightContent, isShowDrag ,scrollableRef,centerDragVia}) => {
 useEffect(() => {
    const handleScroll = () => {
      const scrollable = scrollableRef.current;
      if (scrollable) {
        const scrollPosition = scrollable.scrollTop;
        scrollable.style.backgroundPositionY = `${scrollPosition * 1}px`;
      }
    };

    const scrollable = scrollableRef.current;
    scrollable.addEventListener('scroll', handleScroll);

    return () => {
      scrollable.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen gap-4">
      <div className="col-span-1 fade-up my-auto">
        <div className='custom-container'>
          {leftContent}
          {isShowDrag && <DragComponent  centerDragVia={centerDragVia} scrollableRef={scrollableRef} />}
        </div>
      </div>
      <div ref={scrollableRef} data-scroll='vertical' className="col-span-1  dark-section scrollable-container max-h-screen parallax h-screen py-24 overflow-y-auto bg-[#113120]">
        <div className='custom-container'>
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default ScrollLayout;