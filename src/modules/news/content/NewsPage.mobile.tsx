import {ButtonPrimaryMedium, IDefaultFC} from '@/src/shared';
import React, {useCallback} from 'react';
import {NewsPageHeader} from '../components/newsPageHeader/NewsPageHeader';
import {NEWS_ARTICLES} from '../constants';
import {INewsArticle} from '../entities';
import {NewsCardMobile} from '../components/newsCard';

const NewsPageMobile: IDefaultFC = () => {
  const renderNewsArticle = useCallback<(newsArticleItem: INewsArticle, index: number) => React.JSX.Element>(
    (newsArticleItem, index) => {
      const key = `${newsArticleItem.title}_${index}`;
      const className = index === 0 ? 'w-[100%]' : 'w-[100%] mt-10';
      return (
        <div key={key} className={className}>
          <NewsCardMobile newsArticle={newsArticleItem} />
        </div>
      );
    },
    [],
  );

  return (
    <div className="min-h-[100%] flex flex-col align-center px-[4.45%] py-[80px] bg-gray_900">
      <NewsPageHeader />
      <div className={'py-[64px]'}>{NEWS_ARTICLES.map((item, index) => renderNewsArticle(item, index))}</div>
      <div className="py-[64px] self-center items-center">
        <ButtonPrimaryMedium>{'一覧を見る'}</ButtonPrimaryMedium>
      </div>
    </div>
  );
};

export {NewsPageMobile};
