import {scaleHorizontal, scaleVertical} from '@/src/shared';
import React, {FC} from 'react';

const HomeHeader: FC = () => {
  return (
    <div className={`px-[${scaleHorizontal(40)}] py-[${scaleVertical(16)}]`}>
      
    </div>
  );
};

export {HomeHeader};
