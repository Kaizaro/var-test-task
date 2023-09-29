import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextENMediumMD: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-md font-en font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextENMediumMD};
