import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMedium2XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-2xl font-ja font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextJAMedium2XL};
