import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBold2XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-2xl font-en-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextENBold2XL};
