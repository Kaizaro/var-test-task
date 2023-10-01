import {HomeHeader} from '@/src/modules/home';
import {scaleHorizontal} from '@/src/shared';
import React, {FC} from 'react';

const HomePagePC: FC = () => {
  return (
    <div className={`px-[${scaleHorizontal(320)}]`}>
      <HomeHeader />
    </div>
  );
};

export {HomePagePC};
