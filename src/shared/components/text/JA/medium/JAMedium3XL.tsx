import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMedium3XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-3xl font-ja-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextJAMedium3XL};