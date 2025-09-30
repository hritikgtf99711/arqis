import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return ReactDOM.createPortal(
    <footer className='fixed w-[90%] left-[50%] translate-x-[-50%] flex gap-5 items-end justify-between bottom-10'>
      <h2 className='uppercase basis-[18%] font-[200] text-[40px]'>The Arc of real estate</h2>
      <div className='border-[0.5px] border-[#000] flex-1 mb-[20px] h-[1px]'></div>
      <div className='flex gap-3 mb-[10px]'>
        <h2 className='uppercase text-[18px] tracking-[6px]'>start journey</h2>
        <img src='/assets/right_arrow.svg' className='ml-3' width={'25'} alt='arrow' />
      </div>
    </footer>,
    document.getElementById('footer-portal') 
  );
};

export default Footer;
