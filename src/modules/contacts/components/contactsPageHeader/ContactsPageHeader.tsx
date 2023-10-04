import {COLORS, IDefaultFC, TextJABold5XL} from '@/src/shared';
import React from 'react';
import {CONTACTS_PAGE_TITLE} from '.';

const ContactsPageHeader: IDefaultFC = () => {
  return (
    <div className="w-[100%]">
      <TextJABold5XL color={COLORS.white}>{CONTACTS_PAGE_TITLE}</TextJABold5XL>
    </div>
  );
};

export {ContactsPageHeader};
