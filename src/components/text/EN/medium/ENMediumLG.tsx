import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMediumLG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-lg font-en font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextENMediumLG};
