import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold9XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-9xl font-ja-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextJABold9XL};
