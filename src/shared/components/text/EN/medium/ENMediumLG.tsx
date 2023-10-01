import React from 'react';
import {IText} from '../..';
import {IDefaultFC} from '@/src/shared';

const TextENMediumLG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <div className='text-black text-lg font-en-medium font-medium'>{props.children ?? text}</div>
  );
};

export {TextENMediumLG};
