import {StaticImport} from 'next/dist/shared/lib/get-img-props';

export interface INewsArticle {
  title: string;
  date: string;
  image: StaticImport;
  badgeTitle: string;
  badgeBgColor?: string;
  badgeTextColor?: string;
}
