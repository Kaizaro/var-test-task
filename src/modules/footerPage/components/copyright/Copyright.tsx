import {COLORS, IDefaultFC, TextENBoldXS} from '@/src/shared';
import React from 'react';
import {COPYRIGHT_LABEL} from '.';

const Copyright: IDefaultFC = () => {
  return (
    <div className="w-[100%] flex flex-row justify-center items-center self-center">
      <TextENBoldXS color={COLORS.gray_666}>{COPYRIGHT_LABEL}</TextENBoldXS>
    </div>
  );
};

export {Copyright};
