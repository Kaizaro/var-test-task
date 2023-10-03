import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../../base/types';

const TextENMedium2XS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-2xs font-en-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextENMedium2XS};
