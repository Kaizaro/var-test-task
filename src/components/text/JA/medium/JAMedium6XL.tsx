import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMedium6XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-6xl font-ja-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextJAMedium6XL};
