import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold5XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-5xl font-ja-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextJABold5XL};
