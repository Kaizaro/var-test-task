export interface IContactsBadgeItem {
  enTitle: string;
  jpTitle: string;
  description: string;
  bgColor?: string;
  buttonType: 'primary' | 'secondary';
  handleButtonPress?: () => void;
  buttonTitle?: string;
}
