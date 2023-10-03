import {COLORS, IDefaultFC, TextJABoldSM, TextJABoldXL} from '@/src/shared';
import Image from 'next/image';
import React from 'react';
import {INewsCard} from './NewsCard.types';
import {NewsCardBadge} from '../newsCardBadge';

const NewsCard: IDefaultFC<INewsCard> = ({newsArticle}) => {
  return (
    <div>
      <div className="absolute top-4 right-4">
        <NewsCardBadge
          label={newsArticle.badgeTitle}
          bgColor={newsArticle.badgeBgColor}
          textColor={newsArticle.badgeTextColor}
        />
      </div>
      <Image src={newsArticle.image} width={'32.03%'} height={231} alt="article_image" />
      <div>
        <div>
          <TextJABoldSM color={COLORS.white}>{newsArticle.date}</TextJABoldSM>
        </div>
        <div>
          <TextJABoldXL color={COLORS.white}>{newsArticle.title}</TextJABoldXL>
        </div>
      </div>
    </div>
  );
};

export {NewsCard};
