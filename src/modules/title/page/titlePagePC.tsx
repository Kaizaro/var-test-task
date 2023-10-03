import React, {FC} from 'react';
import {HomeHeader} from '@/src/modules/title';
import {HomeBodyText} from '@/src/modules/title/components/bodyText';

const TitlePagePC: FC = () => {
  return (
    <div className={'min-h-screen flex-1 flex-col items-center py-[16px] bg-home-background-pc bg-cover px-[8%]'}>
      <HomeHeader />
      <HomeBodyText />
    </div>
  );
};

export default TitlePagePC;
