import React from 'react';
import {BaseText, IText} from '../..';
import {IDefaultFC} from '@/src/shared';

const TextJABoldMD: IDefaultFC<IText> = ({
  size = 'md',
  color = 'black',
  fontFamily = 'ja-bold',
  fontWeight = 'bold',
  letterSpacing = '0.04px',
  ...props
}) => {
  return (
    <BaseText size={size} fontFamily={fontFamily} color={color} fontWeight={fontWeight} letterSpacing={letterSpacing} {...props}>{props.children}</BaseText>
    // <div className='text-black text-md font-ja-bold font-bold inline'>{props.children ?? text}</div>
  );
};

export {TextJABoldMD};
