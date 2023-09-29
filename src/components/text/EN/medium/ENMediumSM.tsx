import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMediumSM: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-sm font-en font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextENMediumSM};
