import {IDefaultFC} from '@/src/shared';
import React from 'react';
import {ContactsBadge, ContactsPageHeader} from '../components';

const ContactsPagePC: IDefaultFC = () => {
  return (
    <div className="bg-contact-background-pc bg-cover bg-opacity-50 bg-center px-[16.67%] py-[120px] flex flex-col">
      <ContactsPageHeader />
      <div className="py-[80px]">
        <ContactsBadge />
      </div>
    </div>
  );
};

export {ContactsPagePC};
