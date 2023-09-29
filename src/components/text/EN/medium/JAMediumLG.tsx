import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMedium2LG: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-lg font-ja font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextJAMedium2LG};
