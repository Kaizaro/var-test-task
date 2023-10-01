import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMediumXS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-xs font-en-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextENMediumXS};
