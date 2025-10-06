import React, { useRef, useEffect } from 'react';

const ScrollLayout = ({ leftContent, rightContent,isShowDrag }) => {
const footerRef = useRef(null);
const scrollableRef = useRef(null);
const progRef = useRef(null);
const dragButtonRef = useRef(null);

useEffect(() => {
const scrollable = scrollableRef.current;
const prog = progRef.current;
const dragButton = dragButtonRef.current;
  if(!prog) return

const updateProgress = () => {
  const scrollTop = scrollable.scrollTop;
  const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
  const scrollPercentage = ((scrollTop / scrollHeight) * 100) + 4;
  prog.style.width = `${scrollPercentage}%`;
};

prog.style.width = '4%';

const onDrag = (e) => {
  e.preventDefault();
  const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
  const rect = dragButton.getBoundingClientRect();
  const dragX = e.clientX - rect.left;
  const newScrollTop = (dragX / rect.width) * scrollHeight;
  scrollable.scrollTop = newScrollTop;
  updateProgress();
};

dragButton.addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onDrag);
  }, { once: true });
});

scrollable.addEventListener('scroll', updateProgress);

return () => {
  scrollable.removeEventListener('scroll', updateProgress);
};
}, []);

return (
<div className="grid grid-cols-1 md:grid-cols-2 h-screen gap-4">
  <div className="col-span-1 fade-up my-auto">
    <div className='custom-container '>
    {leftContent}
    {
      isShowDrag&&<div ref={dragButtonRef} className="drage_button flex mt-[100px]  gap-[8px] items-center relative w-[100%] mx-auto">
      <div className='h-[1px] bg-[#00000069] w-[60%]'>
      <div ref={progRef} className="prog  top-1/2 transform -translate-y-1/2 h-[3px] bg-[#525252] transition-all duration-100" style={{ width: '0%' }}>
      </div>
      </div>

      <div className="">
        <span className="text-[#434343] tracking-[1.2] uppercase text-sm ml-2">DRAG</span>
      </div>
    </div>
    }
    
  </div>
        </div>
  <div ref={scrollableRef} className="col-span-1 max-h-screen parallax h-screen py-24 overflow-y-auto bg-[#113120]">
    <div className='custom-container'>
    {rightContent}
    </div>
  </div>
</div>
);
};

export default ScrollLayout;