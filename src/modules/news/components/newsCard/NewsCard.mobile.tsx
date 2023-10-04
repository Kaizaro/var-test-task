import {COLORS, IDefaultFC, TextJABoldSM, TextJABoldXL} from '@/src/shared';
import React from 'react';
import {INewsCard} from './NewsCard.types';
import {NewsCardBadge} from '../newsCardBadge';

const NewsCardMobile: IDefaultFC<INewsCard> = ({newsArticle}) => {
  return (
    <div className="w-[100%]">
      <div
        style={{
          backgroundImage: `url(${newsArticle.image.src})`,
          // width: '100%',
          width: '100%',
          height: 185,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: 16,
        }}>
        {/* <Image src={newsArticle.image} width={'32.03%'} height={231} alt="article_image" /> */}
        <div className="px-4 py-4 items-end flex flex-row justify-end">
          <NewsCardBadge
            label={newsArticle.badgeTitle}
            bgColor={newsArticle.badgeBgColor}
            textColor={newsArticle.badgeTextColor}
          />
        </div>
      </div>
      <div>
        <div className={'mt-2'}>
          <TextJABoldSM color={COLORS.white}>{newsArticle.date}</TextJABoldSM>
        </div>
        <div className={'mt-1'}>
          <TextJABoldXL color={COLORS.white}>{newsArticle.title}</TextJABoldXL>
        </div>
      </div>
    </div>
  );
};

export {NewsCardMobile};
