import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../../types';

const TextENMedium2XS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-2xs font-en-medium font-medium'>{props.children ?? text}</p>
  );
};

export {TextENMedium2XS};