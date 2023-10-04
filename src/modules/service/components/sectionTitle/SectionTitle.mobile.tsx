import {COLORS, IDefaultFC, TextENBold4XL, TextJABoldSM} from '@/src/shared';
import React from 'react';
import {ISectionTitle} from '.';

const SectionTitleMobile: IDefaultFC<ISectionTitle> = ({title, subtitle}) => {
  return (
    <div className="flex flex-row">
      <div className="w-[8px] bg-accent mr-4" />
      <div className="flex flex-col">
        <TextENBold4XL color={COLORS.white}>{title}</TextENBold4XL>
        <TextJABoldSM color={COLORS.white}>{subtitle}</TextJABoldSM>
      </div>
    </div>
  );
};

export {SectionTitleMobile};
