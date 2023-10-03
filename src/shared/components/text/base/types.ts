import {TNullable} from "@/src/shared";

export interface IText {
  text?: string;
  size?: number | string;
  color?: string;
  fontFamily?: string;
  fontWeight?: number | string;
  lineHeight?: number | string;
  letterSpacing?: number | string;
  isUnderlined?: boolean;
  customClassName?: TNullable<string>;
}
