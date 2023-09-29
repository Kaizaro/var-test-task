import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABoldLG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-lg font-ja font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextJABoldLG};
