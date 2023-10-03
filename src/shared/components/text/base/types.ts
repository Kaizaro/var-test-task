import {COLORS} from '@/src/shared/theme';
import {FONTS} from './../../../theme/fonts';
import {TNullable} from "@/src/shared";
import {CSSProperties} from 'react';

export interface IText {
  text?: string;
  size?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: number | string;
  lineHeight?: number | string;
  letterSpacing?: number | string;
  isUnderlined?: boolean;
  // customClassName?: TNullable<string>;
  customStyle?: TNullable<CSSProperties>;
}
