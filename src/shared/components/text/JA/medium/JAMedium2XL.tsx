import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMedium2XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-2xl font-ja-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextJAMedium2XL};
