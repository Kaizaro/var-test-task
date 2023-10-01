import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldXL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-xl font-ja-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextJABoldXL};
