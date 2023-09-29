import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold4XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-4xl font-ja font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextJABold4XL};
