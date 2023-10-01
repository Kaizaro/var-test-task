import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBoldMD: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-md font-en-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextENBoldMD};
