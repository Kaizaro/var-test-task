import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMediumLG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-lg font-ja-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextJAMediumLG};
