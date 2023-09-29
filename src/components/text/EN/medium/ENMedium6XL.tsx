import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium6XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-6xl font-en font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextENMedium6XL};
