import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBoldLG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-lg font-en-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextENBoldLG};
