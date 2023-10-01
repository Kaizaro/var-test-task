import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldMD: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-md font-ja-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextJABoldMD};
