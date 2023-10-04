import React from 'react';
import {IDefaultFC, useDeviceSize} from '@/src/shared';
import {NewsPageMobile, NewsPagePC} from '..';

const NewsPage: IDefaultFC = () => {
  const {isDesktop} = useDeviceSize();

  return isDesktop ? <NewsPagePC /> : <NewsPageMobile />;
};

export default NewsPage;
