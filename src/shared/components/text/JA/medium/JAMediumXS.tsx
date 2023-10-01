import React from 'react';
import {IText} from '../..';
import {IDefaultFC} from '@/src/shared';

const TextJAMediumXS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-xs font-ja-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextJAMediumXS};
