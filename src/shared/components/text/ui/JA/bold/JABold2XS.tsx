import React from 'react';
import {BaseText, IText} from '../..';
import {COLORS, DEFAULT_LETTER_SPACING, FONTS, FONT_SIZES, FONT_WEIGHTS, IDefaultFC, getLineHeight} from '@/src/shared';

const TextJABold2XS: IDefaultFC<IText> = ({
  size = FONT_SIZES['2XS'],
  color = COLORS.black,
  fontFamily = FONTS.JP_BOLD,
  fontWeight = FONT_WEIGHTS.BOLD,
  lineHeight = getLineHeight(size),
  letterSpacing = DEFAULT_LETTER_SPACING,
  ...props
}) => {
  return (
    <BaseText
      size={size}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      color={color}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      {...props}>
      {props.children}
    </BaseText>
  );
};

export {TextJABold2XS};
