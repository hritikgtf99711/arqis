import React, { useRef, useEffect } from 'react';
import DragComponent from './DragComponent';

const ScrollLayout = ({ leftContent, rightContent, isShowDrag ,scrollableRef}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen gap-4">
      <div className="col-span-1 fade-up my-auto">
        <div className='custom-container'>
          {leftContent}
          {isShowDrag && <DragComponent scrollableRef={scrollableRef} />}
        </div>
      </div>
      <div ref={scrollableRef} className="col-span-1 scrollable-container max-h-screen parallax h-screen py-24 overflow-y-auto bg-[#113120]">
        <div className='custom-container'>
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default ScrollLayout;