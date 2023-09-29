import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMedium2LG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-lg font-en font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextENMedium2LG};
