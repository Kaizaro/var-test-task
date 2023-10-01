import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBold4XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-4xl font-en-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextENBold4XL};
