import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium3XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-3xl font-en-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextENMedium3XL};
