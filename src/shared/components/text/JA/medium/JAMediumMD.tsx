import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMediumMD: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-md font-ja-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextJAMediumMD};
