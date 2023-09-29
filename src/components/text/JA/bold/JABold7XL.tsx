import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold7XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-7xl font-ja font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextJABold7XL};
