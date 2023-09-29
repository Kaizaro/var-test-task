import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../..';

const TextJABold2MD: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-md font-ja font-bold text-black'>{props.children ?? text}</p>
  );
};

export {TextJABold2MD};
