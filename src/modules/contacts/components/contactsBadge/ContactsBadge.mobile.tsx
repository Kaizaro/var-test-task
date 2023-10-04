import {IDefaultFC} from '@/src/shared';
import React, {useCallback} from 'react';
import {CONTACTS_DATA} from '../../constants';
import {ContactBadgeItemMobile, IContactsBadgeItem} from '../contactsBadgeItem';

const ContactsBadgeMobile: IDefaultFC = () => {
  const renderContactsBadgeItem = useCallback<(item: IContactsBadgeItem, index: number) => React.JSX.Element>(
    (item, index) => {
      return (
        <div className={'w-[100%]'}>
          <ContactBadgeItemMobile key={`${item.jpTitle}_${index}`} {...item} />
        </div>
      );
    },
    [],
  );

  return (
    <div className="flex flex-col w-[100%]">
      {CONTACTS_DATA.map((item, index) => renderContactsBadgeItem(item, index))}
    </div>
  );
};

export {ContactsBadgeMobile};
