import {ButtonPrimaryMedium, COLORS, IDefaultFC, TextJABold2XL, TextJAMediumMD} from '@/src/shared';
import React from 'react';
import {HomeBodyTextRegular, HomeBodyTextTitle} from './HomeBodyText.content';

const HomeBodyTextMobile: IDefaultFC = () => {
  return (
    <div className="w-[100%] self-start mt-[8%]">
      <div className="w-[82.62%]">
        <TextJABold2XL>{HomeBodyTextTitle}</TextJABold2XL>
      </div>
      <div className="w-[82.62%] mt-6">
        <TextJAMediumMD color={COLORS.gray_900}>{HomeBodyTextRegular}</TextJAMediumMD>
      </div>
      <div className="mt-16">
        <ButtonPrimaryMedium title="事業内容を見る" />
      </div>
    </div>
  );
};

export {HomeBodyTextMobile};
