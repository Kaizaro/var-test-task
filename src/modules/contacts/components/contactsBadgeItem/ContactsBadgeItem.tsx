import {
  ButtonPrimaryMedium,
  ButtonSecondaryMedium,
  COLORS,
  IDefaultFC,
  TextENBold5XL,
  TextJABold2XL,
  TextJAMediumMD,
} from '@/src/shared';
import React, {useMemo} from 'react';
import {IContactsBadgeItem} from './ContactsBadgeItem.types';

const ContactBadgeItem: IDefaultFC<IContactsBadgeItem> = ({
  enTitle,
  jpTitle,
  description,
  handleButtonPress,
  buttonTitle,
  buttonType = 'primary',
}) => {
  const Button = useMemo(
    () =>
      buttonType === 'primary' ? (
        <ButtonPrimaryMedium handleButtonPress={handleButtonPress}>{buttonTitle}</ButtonPrimaryMedium>
      ) : (
        <ButtonSecondaryMedium handleButtonPress={handleButtonPress}>{buttonTitle}</ButtonSecondaryMedium>
      ),
    [buttonTitle, buttonType, handleButtonPress],
  );

  return (
    <div>
      <div>
        <TextJABold2XL color={COLORS.white}>{jpTitle}</TextJABold2XL>
        <TextENBold5XL color={COLORS.gray_600}>{enTitle}</TextENBold5XL>
      </div>
      <div>
        <TextJAMediumMD>{description}</TextJAMediumMD>
      </div>
      <div>{Button}</div>
    </div>
  );
};

export {ContactBadgeItem};
