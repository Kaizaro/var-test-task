import React, {CSSProperties, useMemo} from 'react';
import {IButton} from '../../types';
import {COLORS, IDefaultFC} from '@/src/shared';

const BaseButtonPrimary: IDefaultFC<IButton> = ({
  handleButtonPress,
  paddingVertical,
  paddingHorizontal,
  customStyles,
  children,
  minWidth = '100%',
  bgColor = COLORS.accent,
  isBorder = false,
  borderColor = COLORS.black,
}) => {
  const buttonStyle = useMemo(() => {
    let style = {
      display: 'inline',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 999,
    } as CSSProperties;
    if (paddingHorizontal) {
      style.paddingInline = paddingHorizontal;
    }
    if (paddingHorizontal) {
      style.paddingInline = paddingHorizontal;
    }
    if (paddingHorizontal) {
      style.paddingBlock = paddingVertical;
    }
    if (bgColor) {
      style.backgroundColor = bgColor;
    }
    if (minWidth) {
      style.minWidth = minWidth;
    }
    if (isBorder) {
      style.borderWidth = 1;
    }
    if (borderColor) {
      style.borderColor = borderColor;
    }
    if (customStyles) {
      style = {...style, ...customStyles};
    }

    return style;
  }, [bgColor, borderColor, customStyles, isBorder, minWidth, paddingHorizontal, paddingVertical]);

  return (
    <button style={buttonStyle} onClick={handleButtonPress}>
      {children}
    </button>
  );
};

export {BaseButtonPrimary};
