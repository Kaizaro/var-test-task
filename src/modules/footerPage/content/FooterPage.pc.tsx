import {IDefaultFC} from '@/src/shared';
import React, {Suspense, createRef, lazy} from 'react';
import {ContactsBlock, Copyright} from '../components';

export const COMPANY_PC_REF = createRef();

const FooterPagePC: IDefaultFC = () => {
  const NavigationBlock = lazy(() => import('../components/navigationBlock/NavigationBlock'));

  return (
    <div className="w-[100%] flex flex-col bg-black py-[80px] px-[16.67%]">
      <div className="w-[100%] flex flex-row justify-between">
        <div ref={COMPANY_PC_REF}>
          <ContactsBlock />
        </div>
        <div>
          <Suspense>
            <NavigationBlock />
          </Suspense>
        </div>
      </div>
      <div className="w-[100%] mt-10">
        <Copyright />
      </div>
    </div>
  );
};

export {FooterPagePC};
