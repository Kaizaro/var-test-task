import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMediumSM: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-sm font-ja font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextJAMediumSM};
