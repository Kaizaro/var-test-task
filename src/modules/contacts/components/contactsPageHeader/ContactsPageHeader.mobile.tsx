import {COLORS, IDefaultFC, TextJABoldXL} from '@/src/shared';
import React from 'react';
import {CONTACTS_PAGE_TITLE} from '.';

const ContactsPageHeaderMobile: IDefaultFC = () => {
  return (
    <div className="w-[100%]">
      <TextJABoldXL color={COLORS.white}>{CONTACTS_PAGE_TITLE}</TextJABoldXL>
    </div>
  );
};

export {ContactsPageHeaderMobile};
