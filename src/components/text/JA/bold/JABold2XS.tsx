import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../../types';

const TextJABold2XS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-black text-2xs font-ja-bold font-bold'>{props.children ?? text}</p>
  );
};

export {TextJABold2XS};
