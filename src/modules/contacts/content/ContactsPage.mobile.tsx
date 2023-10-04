import {IDefaultFC} from '@/src/shared';
import React from 'react';
import {ContactsBadgeMobile, ContactsPageHeaderMobile} from '../components';

const ContactsPageMobile: IDefaultFC = () => {
  return (
    <div className="bg-contact-background-sp bg-cover bg-opacity-50 bg-center px-[4.45%] py-[120px] flex flex-col">
      <ContactsPageHeaderMobile />
      <div className="py-[64px]">
        <ContactsBadgeMobile />
      </div>
    </div>
  );
};

export {ContactsPageMobile};
