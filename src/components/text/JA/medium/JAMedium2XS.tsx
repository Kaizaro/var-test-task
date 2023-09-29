import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../../types';

const TextJAMedium2XS: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-2xs font-ja font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextJAMedium2XS};
