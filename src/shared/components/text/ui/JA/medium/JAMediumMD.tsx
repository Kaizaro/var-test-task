import React from 'react';
import {BaseText, IText} from '../..';
import {COLORS, DEFAULT_LETTER_SPACING, FONTS, FONT_SIZES, FONT_WEIGHTS, IDefaultFC, getLineHeight} from '@/src/shared';

const TextJAMediumMD: IDefaultFC<IText> = ({
  size = FONT_SIZES['MD'],
  color = COLORS.black,
  fontFamily = FONTS.JP_MEDIUM,
  fontWeight = FONT_WEIGHTS.MEDIUM,
  lineHeight = getLineHeight(size),
  letterSpacing = DEFAULT_LETTER_SPACING,
  ...props
}) => {
  return (
    <BaseText size={size} fontFamily={fontFamily} color={color} letterSpacing={letterSpacing} {...props}>{props.children}</BaseText>
  );
};

export {TextJAMediumMD};
