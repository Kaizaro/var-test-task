import React from 'react';
import {BaseText, IText} from '../..';
import {COLORS, DEFAULT_LETTER_SPACING, FONTS, FONT_SIZES, FONT_WEIGHTS, IDefaultFC, getLineHeight} from '@/src/shared';

const TextENBoldXS: IDefaultFC<IText> = ({
  size = FONT_SIZES['XS'],
  color = COLORS.black,
  fontFamily = FONTS.EN_BOLD,
  fontWeight = FONT_WEIGHTS.BOLD,
  lineHeight = getLineHeight(size),
  letterSpacing = DEFAULT_LETTER_SPACING,
  ...props
}) => {
  return (
    <BaseText size={size} fontFamily={fontFamily} color={color} letterSpacing={letterSpacing} {...props}>{props.children}</BaseText>
  );
};

export {TextENBoldXS};
