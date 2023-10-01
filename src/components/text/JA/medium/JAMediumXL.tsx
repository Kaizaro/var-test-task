import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMediumXL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-xl font-ja-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextJAMediumXL};
