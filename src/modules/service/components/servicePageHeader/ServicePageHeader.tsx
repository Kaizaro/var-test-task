import {TextENBold5XL} from '@/src/shared';
import React, {FC} from 'react';
import {SERVICE_PAGE_TITLE} from './ServicePageHeader.constants';

const ServicePageHeader: FC = () => {
  return (
    <div>
      <TextENBold5XL>{SERVICE_PAGE_TITLE.en}</TextENBold5XL>
      <TextENBold5XL>{SERVICE_PAGE_TITLE.en}</TextENBold5XL>
    </div>
  );
};
