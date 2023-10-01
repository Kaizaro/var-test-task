import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldLG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-lg font-ja-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextJABoldLG};
