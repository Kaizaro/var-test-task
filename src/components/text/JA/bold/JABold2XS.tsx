import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../../types';

const TextJABold2xs: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-2xs font-ja font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextJABold2xs};
