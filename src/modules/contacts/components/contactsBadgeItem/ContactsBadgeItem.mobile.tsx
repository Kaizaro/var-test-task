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

const ContactBadgeItemMobile: IDefaultFC<IContactsBadgeItem> = ({
  enTitle,
  jpTitle,
  description,
  handleButtonPress,
  buttonTitle,
  bgColor = COLORS.gray_900,
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
    <div className={'w-[100%] h-[100%] flex flex-col px-[6.7%] py-10'} style={{backgroundColor: bgColor}}>
      <div className="flex flex-row w-[100%] justify-between items-center">
        <div className="absolute z-10">
          <TextJABold2XL color={COLORS.white}>{jpTitle}</TextJABold2XL>
        </div>
        <div className="absolute right-[10%]">
          <TextENBold5XL color={COLORS.gray_666}>{enTitle}</TextENBold5XL>
        </div>
      </div>
      <div className="mt-6 w-[100%]">
        <TextJAMediumMD color={COLORS.gray_100}>{description}</TextJAMediumMD>
      </div>
      <div className="mt-10">{Button}</div>
    </div>
  );
};

export {ContactBadgeItemMobile};
