import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold5XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-5xl font-ja font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextJABold5XL};
