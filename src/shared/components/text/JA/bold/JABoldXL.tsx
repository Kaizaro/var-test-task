import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldXL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-xl font-ja-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextJABoldXL};
