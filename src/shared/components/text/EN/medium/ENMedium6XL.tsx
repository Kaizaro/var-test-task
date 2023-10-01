import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium6XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-6xl font-en-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextENMedium6XL};
