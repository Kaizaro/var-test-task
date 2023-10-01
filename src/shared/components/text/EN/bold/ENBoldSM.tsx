import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBoldSM: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-sm font-en-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextENBoldSM};
