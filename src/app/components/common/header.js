import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; 

  return ReactDOM.createPortal(
    <header className='py-[60px] z-[3] fixed left-0 top-0 w-[100%]'>
      <div className='container mx-[auto]'>
        <div className='flex justify-end gap-10'>
          <Image src='/assets/sound.svg' className='icon' width={'25'} height={25} alt="logo"/>
          <div className='flex items-center cursor-pointer gap-2'>
            <span className='uppercase text tracking-[2px]'>Menu</span>
            <span className='border-[50%]  h-[18px] w-[18px] rounded-full block bg-[#000] circle-pointer'></span>
          </div>
        </div>
      </div>
    </header>,
    document.getElementById('header-portal')
  );
};

export default Header;
