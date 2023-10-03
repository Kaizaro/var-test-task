import React from 'react';
import {IButton, IDefaultFC, TextJABoldXL} from '@/src/shared';

const ButtonPrimaryLarge: IDefaultFC<IButton> = ({title = 'テキスト', handleButtonPress}) => {
  return (
    <button className='px-[24px] py-[12px] bg-accent rounded-[999px] min-w-[160px] items-center justify-center inline' onClick={handleButtonPress}>
      <TextJABoldXL>{title}</TextJABoldXL>
    </button>
  );
};

export {ButtonPrimaryLarge};
