import React, {CSSProperties, useMemo} from 'react';
import {IButton} from '../../types';
import {COLORS, IDefaultFC} from '@/src/shared';

const BaseButton: IDefaultFC<IButton> = ({
  title,
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
  // const className = useMemo(() => {
  //   switch (size) {
  //     case 'small':
  //       return {button: 'px-[24px] py-[12px] bg-accent rounded-[999px] min-w-[160px] items-center justify-center inline', text: 'text-black text-center inline'};
  //     case 'medium':
  //       return {button: 'px-[32px] py-[16px] bg-accent rounded-[999px] min-w-[240px] items-center justify-center inline', text: 'text-black text-center inline'};
  //     case 'large':
  //       return {button: 'px-[48px] py-[24px] bg-accent rounded-[999px] min-w-[320px] items-center justify-center inline', text: 'text-black text-center inline'};
  //   }
  // }, [size]);

  const buttonStyle = useMemo(() => {
    let style = {
      display: 'inline',
      justifyContent: 'center',
      alignItems: 'center',
    } as CSSProperties;
    if (paddingHorizontal) {
      style.paddingInline = paddingHorizontal;
    }
    if (paddingHorizontal) {
      style.paddingInline = paddingHorizontal;
    }
    if (bgColor) {
      style.backgroundColor = bgColor;
    }

    return style;
  }, []);

  return (
    <button style={buttonStyle} onClick={handleButtonPress}>
      {children}
    </button>
  );
};

export {BaseButton};
