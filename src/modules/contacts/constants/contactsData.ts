import {COLORS} from '@/src/shared';
import {IContactsBadgeItem} from '../components/contactsBadgeItem';

export const CONTACTS_DATA = [
  {
    enTitle: 'CONTACT',
    jpTitle: 'お問い合わせ',
    description:
      'IT全般についてのご相談をお受けしております。カウンセリング、見積もり作成ともに無料でご対応いたしますので、お気軽にご相談ください。',
    bgColor: COLORS.gray_900,
    buttonType: 'primary',
    buttonTitle: 'お問い合わせ',
  },
  {
    enTitle: 'DOCUMENT',
    jpTitle: '資料ダウンロード',
    description: '会社案内、法人エンジニア研修に関するPDF資料をご用意しております。一覧ページよりお受け取りください。',
    bgColor: COLORS.gray_700,
    buttonType: 'secondary',
    buttonTitle: '資料ダウンロード',
  },
] as IContactsBadgeItem[];
