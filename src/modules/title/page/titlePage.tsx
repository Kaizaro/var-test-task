import React from 'react';
import {useMediaQuery} from 'react-responsive';
import {TitlePageMobile, TitlePagePC} from '../content';
import {IDefaultFC, useDeviceSize} from '@/src/shared';

const TitlePage: IDefaultFC = () => {
  const {isDesktop} = useDeviceSize();

  return isDesktop ? <TitlePagePC /> : <TitlePageMobile />;
};

export default TitlePage;
