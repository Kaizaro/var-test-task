import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJAMediumMD: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-md font-ja font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextJAMediumMD};
