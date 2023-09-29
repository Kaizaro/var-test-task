import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENBoldLG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-lg font-en font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextENBoldLG};
