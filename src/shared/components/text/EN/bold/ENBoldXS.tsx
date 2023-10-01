import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBoldXS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-xs font-en-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextENBoldXS};
