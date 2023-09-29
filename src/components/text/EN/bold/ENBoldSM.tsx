import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBoldSM: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-sm font-en font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextENBoldSM};
