import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogoClick = () => {
    // Dispatch custom event to trigger navigation to first section
    window.dispatchEvent(new CustomEvent('navigateToFirstSection'));
  };

  if (!isClient) return null;

  return ReactDOM.createPortal(
    <header className='lg:py-[60px] py-[30px] z-[3] fixed left-0 top-0 w-[100%]'>
      <div className='container mx-[auto]'>
        <div className='flex cursor-pointer justify-between items-start gap-10'>
          <Image 
            src='/assets/logo.png' 
            id='header-logo' 
            className='w-36 mt-12 object-contain opacity-0 invisible cursor-pointer transition-transform hover:scale-105' 
            style={{ pointerEvents: 'none' }}
            width={300} 
            height={300} 
            alt='Reshaping Real Estate'
            onClick={handleLogoClick}
          />
          <div className='flex gap-[40px] items-center'>
            <Image 
              src='/assets/sound.svg' 
              className='icon span_3 arrow cursor-pointer' 
              width={'25'} 
              height={25} 
              alt="logo"
            />
            <div className='flex cursor-pointer items-center gap-2'>
              <span className='uppercase text cursor-pointer span_1 tracking-[2px]'>Menu</span>
              <span className='border-[50%] cursor-pointer span_2 h-[18px] w-[18px] rounded-full block bg-[#000] circle-pointer'></span>
            </div>
          </div>
        </div>
      </div>
    </header>,
    document.getElementById('header-portal')
  );
};

export default Header;