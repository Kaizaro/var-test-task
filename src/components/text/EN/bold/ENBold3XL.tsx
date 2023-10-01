import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBold3XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-3xl font-en-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextENBold3XL};
