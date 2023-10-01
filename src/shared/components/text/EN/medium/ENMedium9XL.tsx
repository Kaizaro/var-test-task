import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium9XL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-9xl font-en-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextENMedium9XL};
