import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold3XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-3xl font-ja-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextJABold3XL};
