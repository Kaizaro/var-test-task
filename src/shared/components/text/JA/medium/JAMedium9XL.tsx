import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMedium9XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-9xl font-ja-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextJAMedium9XL};
