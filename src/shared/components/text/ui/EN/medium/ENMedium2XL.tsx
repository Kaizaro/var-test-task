import React from 'react';
import {BaseText, IText} from '../..';
import {COLORS, DEFAULT_LETTER_SPACING, FONTS, FONT_SIZES, FONT_WEIGHTS, IDefaultFC, getLineHeight} from '@/src/shared';

const TextENMedium2XL: IDefaultFC<IText> = ({
  size = FONT_SIZES['2XL'],
  color = COLORS.black,
  fontFamily = FONTS.EN_MEDIUM,
  fontWeight = FONT_WEIGHTS.MEDIUM,
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

export {TextENMedium2XL};
