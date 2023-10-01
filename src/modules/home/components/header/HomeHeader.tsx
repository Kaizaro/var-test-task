import React, {FC} from 'react';

import {Logo, scaleHorizontal, scaleVertical} from '@/src/shared';

const HomeHeader: FC = () => {
  return (
    <div className={`px-[${scaleHorizontal(40)}] py-[${scaleVertical(16)}]`}>
      <Logo size={scaleHorizontal(48)} />
    </div>
  );
};

export {HomeHeader};
