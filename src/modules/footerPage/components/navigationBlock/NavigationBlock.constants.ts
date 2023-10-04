import {URL_ROUTES} from '@/src/shared';
import {INavigationBlockSectionItem} from './NavigationBlock.types';

export const NAVIGATION_BLOCK_SECTIONS = [
  [
    {
      name: 'サービス',
      url: URL_ROUTES.IT_RARETECH,
      isTitle: true,
    },
    {
      name: 'ITスクール RareTECH',
      url: URL_ROUTES.IT_RARETECH,
      isTitle: false,
    },
    {
      name: 'インフラ学習サービス エンベーダー',
      url: URL_ROUTES.ENBEDDER,
      isTitle: false,
    },
    {
      name: 'システム・アプリケーション開発',
      url: URL_ROUTES.SYSTEM_APP,
      isTitle: false,
    },
    {
      name: 'Web制作',
      url: URL_ROUTES.WEB_PRODUCTION,
      isTitle: false,
    },
  ],
  [
    {
      name: '企業情報',
      url: URL_ROUTES.COMPANY,
      isTitle: true,
    },
    {
      name: 'ミッション',
      url: URL_ROUTES.COMPANY,
      isTitle: false,
    },
    {
      name: 'ビジョン',
      url: URL_ROUTES.COMPANY,
      isTitle: false,
    },
    {
      name: 'バリュー',
      url: URL_ROUTES.COMPANY,
      isTitle: false,
    },
    {
      name: '役員一覧',
      url: URL_ROUTES.COMPANY,
      isTitle: false,
    },
    {
      name: '会社概要',
      url: URL_ROUTES.COMPANY,
      isTitle: false,
    },
  ],
  [
    {
      name: '採用情報',
      url: URL_ROUTES.RECRUIT,
      isTitle: true,
    },
    {
      name: '代表メッセージ',
      url: URL_ROUTES.RECRUIT,
      isTitle: false,
    },
    {
      name: '募集要項',
      url: URL_ROUTES.RECRUIT,
      isTitle: false,
    },
  ],
  [
    {
      name: 'お知らせ',
      url: URL_ROUTES.NEWS,
      isTitle: true,
    },
    {
      name: 'サステナビリティ',
      url: URL_ROUTES.SUSTANIBILITY,
      isTitle: true,
    },
    {
      name: 'プライバシーポリシー',
      url: URL_ROUTES.COMPANY,
      isTitle: true,
    },
  ],
] as Array<INavigationBlockSectionItem[]>;
