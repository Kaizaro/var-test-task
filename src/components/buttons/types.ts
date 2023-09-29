export type IButtonSize = 'small' | 'medium' | 'large';

export interface IButton {
  title?: string;
  size?: IButtonSize;
  handleButtonPress?: () => void;
}