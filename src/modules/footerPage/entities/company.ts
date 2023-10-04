import {ILink} from './link';

export interface ICompanyInfo {
  name: string;
  postal: string;
  address: string;
  links: ILink[];
}
