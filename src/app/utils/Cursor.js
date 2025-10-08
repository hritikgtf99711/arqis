import { useState, useEffect, useRef } from 'react';

const CursorAnimation = () => {
  const [cursorState, setCursorState] = useState({
    isHovering: false,
    message: 'Scroll Up',
    type: 'default',
  });
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.15);
      cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.15);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const updateCursorPosition = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const target = e.target;
      const closestImg = target.closest('img');
      
      if (closestImg && !closestImg.classList.contains('logo-section') &&  !closestImg.classList.contains('arrow') &&  !closestImg.classList.contains('cross') &&   !closestImg.classList.contains('no-view')) {
        setCursorState({ isHovering: true, message: 'View', type: 'expand' });
      } else if (target.closest('a') || target.classList.contains('cursor-pointer')) {
        setCursorState({ isHovering: true, message: 'Click', type: 'scale' });
      } else if (target.classList.contains('dark-section') || target.closest('.dark-section')) {
        setCursorState({ isHovering: true, message: 'Scroll', type: 'white' });
      } else {
        setCursorState({ isHovering: false, message: 'Scroll', type: 'default' });
      }
    };


    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const getStyles = () => {
    switch (cursorState.type) {
      case 'expand':
        return {
          scale: 1,
          width: '80px',
          height: '40px',
          borderRadius: '20px',
            bg: 'rgb(17 49 32 / 60%)',
            textColor: 'white',
          border: 'none',
        };
      case 'scale':
        return {
          scale: 1.5,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          bg: 'transparent',
          textColor: 'black',
          border: '1px solid #113120',
        };
      case 'white':
        return {
          scale: 1,
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          bg: 'white',
          textColor: '#113120',
          border: 'none',
        };
      default:
        return {
          scale: 1,
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          bg: '#113120',
          textColor: 'white',
          border: 'none',
        };
    }
  };

  const styles = getStyles();

  return (
    <>
      {/* <style>{`
        body { cursor: none; }
        * { cursor: none !important; }
      `}</style> */}

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          ref={cursorInnerRef}
          className="flex justify-center items-center  transition-all duration-300 ease-out"
          style={{
            width: styles.width,
            height: styles.height,
            borderRadius: styles.borderRadius,
            backgroundColor: styles.bg,
            border: styles.border,
            transform: `scale(${styles.scale})`,
          }}
        >
          {cursorState.type !== 'scale' && (
            <span
              className="text-sm font-light transition-colors duration-300"
              style={{ color: styles.textColor }}
            >
              {cursorState.message}
            </span>
          )}
        </div>
      </div>

  
    </>
  );
};

export default CursorAnimation;