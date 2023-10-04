import {IDefaultFC} from '@/src/shared';
import React, {useCallback} from 'react';
import {CONTACTS_DATA} from '../../constants';
import {ContactBadgeItem, IContactsBadgeItem} from '../contactsBadgeItem';

const ContactsBadge: IDefaultFC = () => {
  const renderContactsBadgeItem = useCallback<(item: IContactsBadgeItem, index: number) => React.JSX.Element>(
    (item, index) => {
      // const className = index === 0 ? 'w-[50%] rounded-b-[16px]' : 'w-[50%] rounded-t-[16px]';
      return (
        <div className={'w-[50%] min-h-[308px]'}>
          <ContactBadgeItem key={`${item.jpTitle}_${index}`} {...item} />
        </div>
      );
    },
    [],
  );

  return (
    <div className="flex flex-row w-[100%] justify-center items-center">
      {CONTACTS_DATA.map((item, index) => renderContactsBadgeItem(item, index))}
    </div>
  );
};

export {ContactsBadge};
