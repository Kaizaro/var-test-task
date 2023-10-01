import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium7XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-7xl font-en-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextENMedium7XL};