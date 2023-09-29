import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMedium5XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-5xl font-ja font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextJAMedium5XL};
