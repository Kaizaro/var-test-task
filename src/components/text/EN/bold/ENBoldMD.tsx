import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBoldMD: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-md font-en font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextENBoldMD};
