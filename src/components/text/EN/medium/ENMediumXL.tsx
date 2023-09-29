import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMediumXL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-xl font-en font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextENMediumXL};
