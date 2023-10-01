import React from 'react';
import Image from 'next/image';

import {IDefaultFC, scaleHorizontal} from '../..';
import {ILogo} from './Logo.types';

import logoIcon from '../../../../public/common/Logo@3x.png';

const Logo: IDefaultFC<ILogo> = ({size = scaleHorizontal(64)}) => {
  return (
    <Image src={logoIcon} alt={'Logo'} width={size} height={size} className='inline' />
  );
};

export {Logo};
