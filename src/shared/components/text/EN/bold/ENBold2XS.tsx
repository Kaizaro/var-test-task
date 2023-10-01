import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../../types';

const TextENBold2XS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-2xs font-en-bold font-bold'>{props.children ?? text}</div>
  );
};

export {TextENBold2XS};
