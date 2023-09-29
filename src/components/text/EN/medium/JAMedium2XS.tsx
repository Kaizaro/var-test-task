import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../../types';

const TextJAMedium2xs: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-2xs font-ja font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextJAMedium2xs};
