import React from 'react';
import {BaseText, IText} from '../..';
import {COLORS, DEFAULT_LETTER_SPACING, FONTS, FONT_SIZES, FONT_WEIGHTS, IDefaultFC, getLineHeight} from '@/src/shared';

const TextENBoldSM: IDefaultFC<IText> = ({
  size = FONT_SIZES['SM'],
  color = COLORS.black,
  fontFamily = FONTS.EN_BOLD,
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

export {TextENBoldSM};
