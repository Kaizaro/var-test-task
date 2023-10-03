import {IDefaultFC, TextENBold5XL, TextJABoldMD} from '@/src/shared';
import React from 'react';
import {SERVICE_PAGE_TITLE} from './ServicePageHeader.constants';

const ServicePageHeader: IDefaultFC = () => {
  return (
    <div className="w-[100%] flex-col items-center border">
      <div className="w-[100%] justify-center items-center border">
        <TextENBold5XL>{SERVICE_PAGE_TITLE.en}</TextENBold5XL>
      </div>
      <div>
        <TextJABoldMD>{SERVICE_PAGE_TITLE.jp}</TextJABoldMD>
      </div>
    </div>
  );
};

export {ServicePageHeader};
