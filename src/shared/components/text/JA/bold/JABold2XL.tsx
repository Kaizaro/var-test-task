import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold2XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-2xl font-ja-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextJABold2XL};
