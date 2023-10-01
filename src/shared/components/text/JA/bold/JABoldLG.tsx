import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldLG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-lg font-ja-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextJABoldLG};
