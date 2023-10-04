import React, {FC} from 'react';
import {HomeHeaderMobile} from '@/src/modules/title';
import {HomeBodyTextMobile} from '@/src/modules/title/components/bodyText';

const TitlePageMobile: FC = () => {
  return (
    <div
      className={
        'min-h-screen w-[100%] flex flex-col items-center py-[1.875%] bg-home-background-sp bg-cover px-[4.45%]'
      }>
      <HomeHeaderMobile />
      <HomeBodyTextMobile />
    </div>
  );
};

export {TitlePageMobile};
