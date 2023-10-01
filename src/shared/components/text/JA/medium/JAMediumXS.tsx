import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMediumXS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-xs font-ja-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextJAMediumXS};
