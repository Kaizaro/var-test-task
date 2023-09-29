import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium9XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-9xl font-en font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextENMedium9XL};