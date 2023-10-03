import {IDefaultFC, IText} from '@/src/shared';
import React, {CSSProperties, useMemo} from 'react';

const BaseText: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  const textStyle = useMemo(() => {
    let defaultStyle = {
      display: 'inline'
    } as CSSProperties;
    if (props.color) {
      defaultStyle.color = props.color;
    }
    if (props.size) {
      defaultStyle.fontSize = props.size;
    }
    if (props.fontFamily) {
      defaultStyle.fontFamily = props.fontFamily;
    }
    if (props.fontWeight) {
      defaultStyle.fontWeight = props.fontWeight;
    }
    if (props.lineHeight) {
      defaultStyle.lineHeight = props.lineHeight;
    }
    if (props.letterSpacing) {
      defaultStyle.letterSpacing = props.letterSpacing;
    }
    if (props.isUnderlined) {
      defaultStyle.textDecorationLine = 'underline';
    }
    if (props.customStyle) {
      defaultStyle = {...defaultStyle, ...props.customStyle}
    }
    return defaultStyle;
  }, [props.color, props.fontFamily, props.fontWeight, props.isUnderlined, props.letterSpacing, props.lineHeight, props.size, props.customStyle]);

  return (
    <p style={textStyle}>{props.children ?? text}</p>
  );
};

export {BaseText};
