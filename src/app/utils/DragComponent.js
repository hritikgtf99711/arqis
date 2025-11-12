"use client"
import React, { useRef, useEffect } from 'react';

const DragComponent = ({ scrollableRef, centerDragVia }) => {
  const progRef = useRef(null);
  const dragButtonRef = useRef(null);
  const isDraggingRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const scrollable = scrollableRef.current;
    const prog = progRef.current;
    const dragButton = dragButtonRef.current;

    if (!prog || !scrollable || !dragButton) return;

    const updateProgress = () => {
      if (isDraggingRef.current) return;
      const scrollTop = scrollable.scrollTop;
      const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
      const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      prog.style.width = `${Math.max(4, Math.min(100, scrollPercentage))}%`;
    };

    const onDrag = (e) => {
      if (!isDraggingRef.current) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = dragButton.getBoundingClientRect();
        const dragX = Math.max(0, Math.min(e.clientX - rect.left, rect.width)); 
        const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
        const scrollPercentage = (dragX / rect.width) * scrollHeight;
        scrollable.scrollTop = scrollPercentage;
        prog.style.width = `${Math.max(4, Math.min(100, (scrollPercentage / scrollHeight) * 100))}%`;
      });
    };

    const onMouseDown = (e) => {
      e.preventDefault();
      isDraggingRef.current = true;
      document.addEventListener('mousemove', onDrag);
      document.addEventListener('mouseup', onMouseUp, { once: true });
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener('mousemove', onDrag);
      cancelAnimationFrame(rafRef.current);
    };

    prog.style.width = '4%';
    dragButton.addEventListener('mousedown', onMouseDown);
    scrollable.addEventListener('scroll', updateProgress);

    return () => {
      scrollable.removeEventListener('scroll', updateProgress);
      dragButton.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [scrollableRef]);

  return (
    <div
      ref={dragButtonRef}
      className={`drag_button lg:flex hidden cursor-pointer ${centerDragVia ? 'justify-center' : ''} flex mt-[100px] gap-[8px] items-center relative w-[100%] mx-auto`}
    >
      <div className="h-[1px]  bg-[#00000069] w-[60%]">
        <div
          ref={progRef}
          className="prog top-1/2 transform flex justify-end items-center -translate-y-1/2 h-[1px] bg-[#525252] transition-all duration-100"
          style={{ width: '4%' }}
        ></div>
      </div>
      <div>
        <span className="text-[#434343] tracking-[1.2] uppercase text-sm ml-2">DRAG</span>
      </div>
    </div>
  );
};

export default DragComponent;