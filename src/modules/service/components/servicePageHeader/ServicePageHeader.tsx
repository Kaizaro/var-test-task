import {COLORS, IDefaultFC, TextENBold5XL, TextJABoldMD, TextJAMediumMD} from '@/src/shared';
import React from 'react';
import {SERVICE_PAGE_SUBTITLE, SERVICE_PAGE_TITLE} from './ServicePageHeader.constants';

const ServicePageHeader: IDefaultFC = () => {
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="w-[100%] flex justify-center items-center">
        <TextENBold5XL color={COLORS.white}>{SERVICE_PAGE_TITLE.en}</TextENBold5XL>
      </div>
      <div>
        <TextJABoldMD color={COLORS.accent}>{SERVICE_PAGE_TITLE.jp}</TextJABoldMD>
      </div>
      <div className="mt-10 px-[16.66%]">
        <TextJAMediumMD color={COLORS.gray_100}>{SERVICE_PAGE_SUBTITLE}</TextJAMediumMD>
      </div>
    </div>
  );
};

export {ServicePageHeader};
