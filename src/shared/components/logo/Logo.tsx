import React from 'react';
import Image from 'next/image';

import {IDefaultFC, scaleHorizontal} from '../..';

import logoIcon from '../../../../public/common/Logo.png';

const logoSize = scaleHorizontal(48);

const Logo: IDefaultFC = () => {
  return (
    <Image src={logoIcon} alt={'Logo'} width={logoSize} height={logoSize} />
  );
};

export {Logo};
