import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMediumLG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-lg font-en-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextENMediumLG};
