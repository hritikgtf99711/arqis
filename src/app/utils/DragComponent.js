import React, { useRef, useEffect } from 'react';

const DragComponent = ({ scrollableRef,centerDragVia }) => {
  const progRef = useRef(null);
  const dragButtonRef = useRef(null);

  useEffect(() => {
    const scrollable = scrollableRef.current;
    const prog = progRef.current;
    const dragButton = dragButtonRef.current;
    
    if (!prog || !scrollable || !dragButton) return;

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
  }, [scrollableRef]);

  return (
    <div ref={dragButtonRef} className={`drage_button  cursor-pointer ${centerDragVia && 'justify-center'}  flex mt-[100px] gap-[8px] items-center relative w-[100%] mx-auto`}>
      <div className='h-[1px] bg-[#00000069] w-[60%]'>
        <div ref={progRef} className="prog top-1/2 transform -translate-y-1/2 h-[3px] bg-[#525252] transition-all duration-100" style={{ width: '0%' }}></div>
      </div>
      <div>
        <span className="text-[#434343] tracking-[1.2] uppercase text-sm ml-2">DRAG</span>
      </div>
    </div>
  );
};

export default DragComponent;