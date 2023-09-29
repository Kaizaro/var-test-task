import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMediumXS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-xs font-en font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextENMediumXS};
