import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium4XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-4xl font-en-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextENMedium4XL};
