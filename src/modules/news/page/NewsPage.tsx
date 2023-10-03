import {IDefaultFC} from '@/src/shared';
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
        <div key={key}>
          <NewsCard newsArticle={newsArticleItem} />
        </div>
      );
    },
    [],
  );

  const renderNewsArticleRow = useCallback<(newsArticleRow: INewsArticle[], index: number) => React.JSX.Element>(
    (newsArticleRow, index) => {
      const key = `${index}`;
      return (
        <div key={key}>{newsArticleRow.map((newsArticleItem, index) => renderNewsArticle(newsArticleItem, index))}</div>
      );
    },
    [renderNewsArticle],
  );

  return (
    <div className="min-h-[100%] flex flex-col align-center px-[20.94%] py-[80px] bg-gray-900">
      <NewsPageHeader />
      <div>{newsChunk.map((item, index) => renderNewsArticleRow(item, index))}</div>
    </div>
  );
};

export default NewsPage;
