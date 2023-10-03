import React, {FC} from 'react';
import {HomeHeader} from '@/src/modules/title';
import {HomeBodyText} from '@/src/modules/title/components/bodyText';

const TitlePagePC: FC = () => {
  return (
    <div
      className={
        'min-h-screen w-[100%] flex flex-col items-center py-[1.48%] bg-home-background-pc bg-cover px-[16.67%]'
      }>
      <HomeHeader />
      <HomeBodyText />
    </div>
  );
};

export default TitlePagePC;
