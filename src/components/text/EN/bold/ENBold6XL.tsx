import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBold6XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-6xl font-en font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextENBold6XL};
