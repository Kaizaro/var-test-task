import {ButtonPrimaryMedium, COLORS, IDefaultFC, TextJABold2XL, TextJAMediumMD} from '@/src/shared';
import React, {useCallback} from 'react';
import {IServiceCard} from '.';
import Image from 'next/image';

const ServiceCardMobile: IDefaultFC<IServiceCard> = ({service}) => {
  const handleButtonPress = useCallback(() => {
    console.log('button pressed');
    if (service.routeUrl) window.location.href = service.routeUrl;
  }, [service.routeUrl]);

  return (
    <div className={'w-[100%] flex flex-col'}>
      <div>
        <TextJABold2XL color={COLORS.white}>{service.name}</TextJABold2XL>
      </div>
      <Image src={service.image} width={328} height={185} alt={'company_image'} className="mt-2" />
      <div className="mt-2">
        <TextJAMediumMD color={COLORS.gray_100}>{service.description}</TextJAMediumMD>
      </div>
      <div className="mt-6">
        <ButtonPrimaryMedium handleButtonPress={handleButtonPress}>{'詳しく見る'}</ButtonPrimaryMedium>
      </div>
    </div>
  );
};

export {ServiceCardMobile};
