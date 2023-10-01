import React from 'react';
import {IText} from '../..';
import {IDefaultFC} from '@/src/shared';

const TextJABoldMD: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-md font-ja-bold font-bold inline'>{props.children ?? text}</div>
  );
};

export {TextJABoldMD};
