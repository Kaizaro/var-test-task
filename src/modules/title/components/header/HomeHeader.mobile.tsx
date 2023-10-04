import React, {FC, useCallback, useState} from 'react';

import {Logo} from '@/src/shared';
import Image from 'next/image';

import headerImage from '../../../../../public/common/menu@3x.png';
import {MobileMenuModal} from '../mobileMenuModal';

const HomeHeaderMobile: FC = () => {
  const [isVisible, setVisible] = useState(false);

  const handleOpenButtonPress = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCloseButtonPress = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div
      className={'px-4 py-3 bg-white rounded-[16px] justify-between self-center items-center flex flex-row w-[100%]'}>
      <Logo size={40} />
      <button>
        <Image
          src={headerImage}
          width={40}
          height={40}
          alt="menu_button"
          className={'inline'}
          onClick={handleOpenButtonPress}
        />
      </button>
      <MobileMenuModal isVisible={isVisible} handleCloseMenu={handleCloseButtonPress} />
    </div>
  );
};

export {HomeHeaderMobile};
