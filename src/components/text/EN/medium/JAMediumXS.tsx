import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMediumXS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-xs font-ja font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextJAMediumXS};
