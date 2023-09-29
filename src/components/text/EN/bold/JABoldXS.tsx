import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldXS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-xs font-ja font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextJABoldXS};
