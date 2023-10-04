import {ButtonPrimaryLarge, ButtonPrimaryMedium, IDefaultFC} from '@/src/shared';
import React, {useCallback, useMemo} from 'react';
import {NewsPageHeader} from '../components/newsPageHeader/NewsPageHeader';
import {chunk} from 'lodash';
import {NEWS_ARTICLES} from '../constants';
import {INewsArticle} from '../entities';
import {NewsCard} from '../components/newsCard';

const NewsPage: IDefaultFC = () => {
  const newsChunk = useMemo(() => chunk(NEWS_ARTICLES, 3), []);

  const renderNewsArticle = useCallback<(newsArticleItem: INewsArticle, index: number) => React.JSX.Element>(
    (newsArticleItem, index) => {
      const key = `${newsArticleItem.title}_${index}`;
      return (
        <div key={key} className="w-[32.03%]">
          <NewsCard newsArticle={newsArticleItem} />
        </div>
      );
    },
    [],
  );

  const renderNewsArticleRow = useCallback<(newsArticleRow: INewsArticle[], index: number) => React.JSX.Element>(
    (newsArticleRow, index) => {
      const key = `${index}`;
      const className =
        index === 0
          ? 'flex flex-row w-[100%] justify-between items-start'
          : 'flex flex-row w-[100%] justify-between items-start mt-10';
      return (
        <div className={className} key={key}>
          {newsArticleRow.map((newsArticleItem, itemIndex) => renderNewsArticle(newsArticleItem, itemIndex))}
        </div>
      );
    },
    [renderNewsArticle],
  );

  return (
    <div className="min-h-[100%] flex flex-col align-center px-[16.67%] py-[80px] bg-gray_900">
      <NewsPageHeader />
      <div className={'py-[80px]'}>{newsChunk.map((item, index) => renderNewsArticleRow(item, index))}</div>
      <div className="py-[80px] self-center items-center">
        <ButtonPrimaryMedium>{'一覧を見る'}</ButtonPrimaryMedium>
      </div>
    </div>
  );
};

export default NewsPage;
