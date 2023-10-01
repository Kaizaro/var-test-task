import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMedium5XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-5xl font-ja-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextJAMedium5XL};
