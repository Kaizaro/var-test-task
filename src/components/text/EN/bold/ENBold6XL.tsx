import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBold6XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-6xl font-en-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextENBold6XL};
