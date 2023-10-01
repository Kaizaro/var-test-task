import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBoldXL: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-xl font-en-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextENBoldXL};
