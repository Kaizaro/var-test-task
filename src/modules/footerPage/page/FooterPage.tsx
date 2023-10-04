import React from 'react';
import {IDefaultFC, useDeviceSize} from '@/src/shared';
import {FooterPageMobile, FooterPagePC} from '..';

const FooterPage: IDefaultFC = () => {
  const {isDesktop} = useDeviceSize();

  return isDesktop ? <FooterPagePC /> : <FooterPageMobile />;
};

export default FooterPage;
