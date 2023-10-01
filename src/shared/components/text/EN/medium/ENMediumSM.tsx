import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMediumSM: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-sm font-en-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextENMediumSM};
