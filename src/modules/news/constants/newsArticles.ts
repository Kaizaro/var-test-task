import {INewsArticle} from "../entities";

import {COLORS} from "@/src/shared";

import renewalImg from '../../../../public/common/renewal@3x.jpg';
import rareTechImg from '../../../../public/common/raretech@3x.png';
import embedderImg from '../../../../public/common/embedder@3x.jpg';
import robotoImg from '../../../../public/common/robot@3x.jpg';
import webMacImg from '../../../../public/common/web_mac@3x.png';
import unionImg from '../../../../public/common/union@3x.png';

export const NEWS_ARTICLES = [
  {
    title: 'ホームページをリニューアルしました。',
    date: '2023.08.17',
    image: renewalImg,
    badgeTitle: 'その他',
    badgeBgColor: COLORS.black,
    badgeTextColor: COLORS.white,
  },
  {
    title: 'ITスクールRareTECHより、SES・人材企業様向け研修プランをリリースしました。',
    date: '2023.03.01',
    image: rareTechImg,
    badgeTitle: 'RareTECH',
    badgeBgColor: COLORS.sub_blue,
    badgeTextColor: COLORS.white,
  },
  {
    title: 'エンベーダーの利用人数が5000名を突破しました。',
    date: '2022.10.05',
    image: embedderImg,
    badgeTitle: 'エンベーダー',
    badgeBgColor: COLORS.sub_aqua,
    badgeTextColor: COLORS.white,
  },
  {
    title: 'システム・アプリケーション開発の受託開発事業を開始しました。',
    date: '2022.09.11',
    image: robotoImg,
    badgeTitle: 'システム・アプリケーション開発',
    badgeBgColor: COLORS.sub_orange,
    badgeTextColor: COLORS.white,
  },
  {
    title: 'Web制作の受託開発事業を開始しました。',
    date: '2023.05.16',
    image: webMacImg,
    badgeTitle: 'Web制作',
    badgeBgColor: COLORS.sub_purple,
    badgeTextColor: COLORS.white,
  },
  {
    title: 'ホームページをリニューアルしました。',
    date: '2022.01.30',
    image: unionImg,
    badgeTitle: 'RareTECH',
    badgeBgColor: COLORS.sub_blue,
    badgeTextColor: COLORS.white,
  },
] as INewsArticle[];
