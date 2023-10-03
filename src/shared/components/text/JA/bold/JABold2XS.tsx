import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../../base/types';

const TextJABold2XS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-2xs font-ja-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextJABold2XS};
