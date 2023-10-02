import {HomeHeader} from '@/src/modules/home';
import {HomeBodyText} from '@/src/modules/home/components/bodyText';
import {getTailwindValue} from '@/src/shared';
import React, {FC} from 'react';

const HomePagePC: FC = () => {
  return (
    <div className={'px-[8%]'}>
      <HomeHeader />
      <HomeBodyText />
    </div>
  );
};

export {HomePagePC};
