import {IDefaultFC, IText} from '@/src/shared';
import classNames from 'classnames';
import React, {useMemo} from 'react';

const BaseText: IDefaultFC<IText> = ({text = 'テキスト', ...props}) => {
  const textClassName = useMemo(() => {
    let defaultClassName = classNames('inline');
    if (props.color) {
      defaultClassName = classNames(defaultClassName, `text-${props.color}`);
    }
    if (props.size) {
      defaultClassName = classNames(defaultClassName, `text-[${props.size}]`);
    }
    if (props.fontFamily) {
      defaultClassName = classNames(defaultClassName, `font-${props.fontFamily}`);
    }
    if (props.fontWeight) {
      defaultClassName = classNames(defaultClassName, `font-${props.fontWeight}`);
    }
    if (props.lineHeight) {
      defaultClassName = classNames(defaultClassName, `leading-[${props.lineHeight}]`);
    }
    if (props.letterSpacing) {
      defaultClassName = classNames(defaultClassName, `tracking-[${props.letterSpacing}]`);
    }
    if (props.isUnderlined) {
      defaultClassName = classNames(defaultClassName, 'underline');
    }
    if (props.customClassName) {
      defaultClassName = classNames(defaultClassName, props.customClassName);
    }

    return defaultClassName;
  }, [props.color, props.customClassName, props.fontFamily, props.fontWeight, props.isUnderlined, props.letterSpacing, props.lineHeight, props.size]);

  return (
    <p className={textClassName}>{props.children ?? text}</p>
  );
};
