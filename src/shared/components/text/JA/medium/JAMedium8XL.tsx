import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMedium8XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-8xl font-ja-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextJAMedium8XL};
