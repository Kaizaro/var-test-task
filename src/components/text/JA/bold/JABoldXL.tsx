import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldXL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-xl font-ja font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextJABoldXL};
