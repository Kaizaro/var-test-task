import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium2XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-2xl font-en-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextENMedium2XL};
