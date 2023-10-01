import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMediumMD: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-md font-en-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextENMediumMD};
