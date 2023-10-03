import {CSSProperties} from "react";

export type IButtonSize = 'small' | 'medium' | 'large';

export interface IButton {
  title?: string;
  size?: IButtonSize;
  handleButtonPress?: () => void;
  bgColor?: string;
  isBorder?: boolean;
  borderColor?: string;
  minWidth?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  customStyles?: CSSProperties;
}