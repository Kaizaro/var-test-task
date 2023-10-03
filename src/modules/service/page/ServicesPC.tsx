import React from 'react';
import {IDefaultFC} from '@/src/shared';
import {ServicePageHeader} from '../components/servicePageHeader/ServicePageHeader';

const ServicesPagePC: IDefaultFC = () => {
  return (
    <div className="min-h-[100%] flex flex-col align-center px-[20.94%] py-[80px] bg-black">
      <ServicePageHeader />
    </div>
  );
};

export default ServicesPagePC;
