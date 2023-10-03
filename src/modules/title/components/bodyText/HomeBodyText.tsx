import {ButtonPrimaryLarge, IDefaultFC, TextJABold6XL, TextJAMedium2XL} from '@/src/shared';
import React from 'react';
import {HomeBodyTextRegular, HomeBodyTextTitle} from './HomeBodyText.content';

const HomeBodyText: IDefaultFC = () => {
  return (
    <div className="self-start mt-[8%]">
      <div className="w-[33.875rem]">
        <TextJABold6XL>{HomeBodyTextTitle}</TextJABold6XL>
      </div>
      <div className="w-[33.875rem] mt-6">
        <TextJAMedium2XL>{HomeBodyTextRegular}</TextJAMedium2XL>
      </div>
      <div className="mt-16">
        <ButtonPrimaryLarge title="事業内容を見る" />
      </div>
    </div>
  );
};

export {HomeBodyText};
