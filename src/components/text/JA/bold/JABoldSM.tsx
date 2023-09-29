import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldSM: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-sm font-ja font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextJABoldSM};
