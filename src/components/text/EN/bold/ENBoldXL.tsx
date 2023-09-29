import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBoldXL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-xl font-en font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextENBoldXL};
