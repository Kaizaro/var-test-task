import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium5XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-5xl font-en-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextENMedium5XL};
