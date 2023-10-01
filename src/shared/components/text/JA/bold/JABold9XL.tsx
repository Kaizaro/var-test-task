import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold9XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-9xl font-ja-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextJABold9XL};
