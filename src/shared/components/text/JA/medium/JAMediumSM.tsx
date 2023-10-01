import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMediumSM: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-sm font-ja-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextJAMediumSM};
