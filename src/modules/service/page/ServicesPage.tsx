import React from 'react';
import {IDefaultFC, useDeviceSize} from '@/src/shared';
import {ServicesPageMobile, ServicesPagePC} from '../content';

const ServicePage: IDefaultFC = () => {
  const {isDesktop} = useDeviceSize();

  return isDesktop ? <ServicesPagePC /> : <ServicesPageMobile />;
};

export default ServicePage;
