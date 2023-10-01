import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold8XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-8xl font-ja-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextJABold8XL};
