import {IDefaultFC} from '@/src/shared';
import React, {Suspense, createRef, lazy} from 'react';
import {ContactsBlock, Copyright} from '../components';

export const COMPANY_MOBILE_REF = createRef();

const FooterPageMobile: IDefaultFC = () => {
  const NavigationBlockMobile = lazy(() => import('../components/navigationBlock/NavigationBlock.mobile'));

  return (
    <div className="w-[100%] flex flex-col bg-black pt-[80px] pb-6 px-[4.45%]">
      <div ref={COMPANY_MOBILE_REF} className="w-[100%] flex flex-col">
        <ContactsBlock />
        <div>
          <Suspense>
            <NavigationBlockMobile />
          </Suspense>
        </div>
      </div>
      <div className="w-[100%] mt-10">
        <Copyright />
      </div>
    </div>
  );
};

export {FooterPageMobile};
