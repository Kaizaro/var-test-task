import {IDefaultFC} from '@/src/types';
import React from 'react';
import {IText} from '../../types';

const TextENMedium2xs: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  return (
    <p className='text-2xs font-en font-medium text-black'>{props.children ?? text}</p>
  );
};

export {TextENMedium2xs};
