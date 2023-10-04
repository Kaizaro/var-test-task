import {COLORS, IDefaultFC, TextENMediumSM} from '@/src/shared';
import React from 'react';
import {IContactsLink} from './Link.types';

const ContactsLink: IDefaultFC<IContactsLink> = ({link}) => {
  return (
    <a href={link.url}>
      <TextENMediumSM isUnderlined color={COLORS.gray_666}>
        {link.text}
      </TextENMediumSM>
    </a>
  );
};

export {ContactsLink};
