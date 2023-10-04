import React from 'react';
import {IDefaultFC, useDeviceSize} from '@/src/shared';
import {ContactsPageMobile, ContactsPagePC} from '..';

const ServicePage: IDefaultFC = () => {
  const {isDesktop} = useDeviceSize();

  return isDesktop ? <ContactsPagePC /> : <ContactsPageMobile />;
};

export default ServicePage;
