import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium8XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-8xl font-en font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextENMedium8XL};
