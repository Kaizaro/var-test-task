export interface IContactsBadgeItem {
  enTitle: string;
  jpTitle: string;
  description: string;
  buttonType: 'primary' | 'secondary';
  handleButtonPress?: () => void;
  buttonTitle?: string;
}
