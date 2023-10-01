import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldSM: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-sm font-ja-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextJABoldSM};
