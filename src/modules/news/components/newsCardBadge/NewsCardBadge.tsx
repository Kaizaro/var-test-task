import {COLORS, IDefaultFC, TextJAMediumSM} from '@/src/shared';
import React from 'react';
import {INewsCardBadge} from '.';

const NewsCardBadge: IDefaultFC<INewsCardBadge> = ({label, bgColor = COLORS.black, textColor = COLORS.white}) => {
  return (
    <div className="inline px-[9px] py-[4px] rounded-[999px]" style={{backgroundColor: bgColor}}>
      <TextJAMediumSM color={textColor}>{label}</TextJAMediumSM>
    </div>
  );
};

export {NewsCardBadge};
