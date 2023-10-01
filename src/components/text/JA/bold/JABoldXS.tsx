import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldXS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-xs font-ja-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextJABoldXS};
