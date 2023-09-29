import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBoldXS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-xs font-en font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextENBoldXS};
