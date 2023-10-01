import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBold8XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-8xl font-en-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextENBold8XL};
