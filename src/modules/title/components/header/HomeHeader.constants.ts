import {URL_ROUTES} from '@/src/shared';
import {IHomeHeaderMenuButton} from './HomeHeader.types';

export const HOME_HEADER_MENU_BUTTONS = [
  {
    title: 'サービス',
    route: URL_ROUTES.IT_RARETECH,
  },
  {
    title: '企業情報',
    route: URL_ROUTES.COMPANY,
  },
  {
    title: '採用情報',
    route: URL_ROUTES.RECRUIT,
  },
  {
    title: 'お知らせ',
    route: URL_ROUTES.NEWS,
  },
] as IHomeHeaderMenuButton[];
