import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMedium7XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-7xl font-ja font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextJAMedium7XL};
