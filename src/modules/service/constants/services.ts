import {ISection} from '../entities';

import raretechImage from '../../../../public/common/IT_raretech@3x.jpg';
import envaderImage from '../../../../public/common/envader@3x.png';
import systemAppImage from '../../../../public/common/systemapp@3x.jpg';
import webImage from '../../../../public/common/create_web@3x.jpg';
import {URL_ROUTES} from '@/src/shared';

export const SERVICES = [
  {
    title: 'Education',
    subtitle: 'ITエンジニア教育事業',
    data: [
      {
        name: 'ITスクール\nRareTECH',
        description:
          '希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。',
        image: raretechImage,
        routeUrl: URL_ROUTES.IT_RARETECH,
      },
      {
        name: 'インフラ学習サービス\nエンベーダー',
        description:
          '日本初の環境構築型のインフラ学習サービスです。Linux、データベース、サイバーセキュリティ等の学習が可能です。',
        image: envaderImage,
        routeUrl: URL_ROUTES.ENVADER,
      },
    ],
  },
  {
    title: 'Development',
    subtitle: '受託開発事業',
    data: [
      {
        name: 'システム・アプリケーション開発',
        description:
          '要件定義から実装、運用まで、フルスクラッチにてアプリケーションを開発します。クラウドネイティブ開発をメインとしております。',
        image: systemAppImage,
        routeUrl: URL_ROUTES.SERVICE_SYSTEM,
      },
      {
        name: 'Web制作',
        description:
          '会社HPやサービスLPなど幅広いジャンルのWebサイトを制作いたします。ノーコードを利用するため、素早い納品が可能です。',
        image: webImage,
        routeUrl: URL_ROUTES.WEB_DESIGN,
      },
    ],
  },
] as ISection[];
