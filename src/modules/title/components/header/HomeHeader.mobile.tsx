import React, {FC} from 'react';

import {Logo} from '@/src/shared';
import Image from 'next/image';

import headerImage from '../../../../../public/common/menu@3x.png';

const HomeHeaderMobile: FC = () => {
  return (
    <div
      className={'px-4 py-3 bg-white rounded-[16px] justify-between self-center items-center flex flex-row w-[100%]'}>
      <Logo size={40} />
      <Image src={headerImage} width={40} height={40} alt="menu_button" className={'inline'} />
    </div>
  );
};

export {HomeHeaderMobile};
