import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../../base/types';

const TextJAMedium2XS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-2xs font-ja-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextJAMedium2XS};
