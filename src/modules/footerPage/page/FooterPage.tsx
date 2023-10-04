import {IDefaultFC} from '@/src/shared';
import React from 'react';
import {ContactsBlock, Copyright} from '../components';

const FooterPage: IDefaultFC = () => {
  return (
    <div className="w-[100%] flex flex-col bg-black py-[80px] px-[16.67%]">
      <div className="w-[100%] flex flex-row">
        <div>
          <ContactsBlock />
        </div>
      </div>
      <div className="w-[100%] mt-10">
        <Copyright />
      </div>
    </div>
  );
};

export default FooterPage;
