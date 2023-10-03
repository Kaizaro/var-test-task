import {COLORS, IDefaultFC, TextENBold5XL, TextJABoldMD, TextJAMediumMD} from '@/src/shared';
import React from 'react';
import {NEWS_PAGE_TITLE} from './NewsPageHeader.constants';

const NewsPageHeader: IDefaultFC = () => {
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="w-[100%] flex justify-center items-center">
        <TextENBold5XL color={COLORS.white}>{NEWS_PAGE_TITLE.en}</TextENBold5XL>
      </div>
      <div>
        <TextJABoldMD color={COLORS.accent}>{NEWS_PAGE_TITLE.jp}</TextJABoldMD>
      </div>
    </div>
  );
};

export {NewsPageHeader};
