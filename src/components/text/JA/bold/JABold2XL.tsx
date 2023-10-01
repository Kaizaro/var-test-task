import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold2XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-2xl font-ja-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextJABold2XL};
