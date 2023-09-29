import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMediumXL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-xl font-ja font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextJAMediumXL};
