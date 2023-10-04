import {COLORS, IDefaultFC, Logo, TextJABoldXL, TextJAMediumSM} from '@/src/shared';
import React, {useCallback} from 'react';
import {COMPANY_INFO} from '../../constants';
import {ContactsLink} from '../link';
import {ILink} from '../../entities';

const ContactsBlock: IDefaultFC = () => {
  const renderLinkItem = useCallback<(item: ILink, index: number) => React.JSX.Element>(
    (item, index) => (
      <div key={`${item.text}_${index}`} className="mr-2">
        <ContactsLink link={item} />
      </div>
    ),
    [],
  );

  return (
    <div>
      <Logo />
      <div className="mt-2">
        <TextJABoldXL color={COLORS.white}>{COMPANY_INFO.name}</TextJABoldXL>
      </div>
      <div className="mt-2">
        <TextJAMediumSM color={COLORS.gray_100}>{COMPANY_INFO.postal}</TextJAMediumSM>
      </div>
      <div>
        <TextJAMediumSM color={COLORS.gray_100}>{COMPANY_INFO.address}</TextJAMediumSM>
      </div>
      <div className="mt-2 flex flex-row">{COMPANY_INFO.links.map((item, index) => renderLinkItem(item, index))}</div>
    </div>
  );
};

export {ContactsBlock};
