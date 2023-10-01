import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMediumXL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-xl font-en-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextENMediumXL};
