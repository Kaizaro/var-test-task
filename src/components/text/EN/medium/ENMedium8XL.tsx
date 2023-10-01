import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium8XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-8xl font-en-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextENMedium8XL};
