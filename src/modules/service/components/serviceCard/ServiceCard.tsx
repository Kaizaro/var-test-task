import {ButtonPrimaryMedium, COLORS, IDefaultFC, TextJABold2XL, TextJAMediumMD} from '@/src/shared';
import React, {useCallback, useMemo} from 'react';
import {IServiceCard} from '.';
import Image from 'next/image';

const ServiceCard: IDefaultFC<IServiceCard> = ({service, isRowReversed}) => {
  const containerClassName = useMemo(
    () => (isRowReversed ? 'w-[100%] flex justify-between flex-row-reverse' : 'w-[100%] flex justify-between'),
    [isRowReversed],
  );
  const imageClassName = useMemo(() => (isRowReversed ? 'ml-[64px] inline' : 'mr-[64px] inline'), [isRowReversed]);

  const handleButtonPress = useCallback(() => {
    console.log('button pressed');
    if (service.routeUrl) window.location.href = service.routeUrl;
  }, [service.routeUrl]);

  return (
    <div className={containerClassName}>
      <Image src={service.image} width={400} height={225} alt={'company_image'} className={imageClassName} />
      <div>
        <div>
          <TextJABold2XL color={COLORS.white}>{service.name}</TextJABold2XL>
        </div>
        <div className="mt-6">
          <TextJAMediumMD color={COLORS.gray_100}>{service.description}</TextJAMediumMD>
        </div>
        <div className="mt-10">
          <ButtonPrimaryMedium handleButtonPress={handleButtonPress}>{'詳しく見る'}</ButtonPrimaryMedium>
        </div>
      </div>
    </div>
  );
};

export {ServiceCard};
