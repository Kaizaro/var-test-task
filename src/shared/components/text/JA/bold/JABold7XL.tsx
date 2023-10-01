import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold7XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-7xl font-ja-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextJABold7XL};
