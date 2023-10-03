import React, {useCallback} from 'react';
import {IDefaultFC} from '@/src/shared';
import {ServicePageHeader} from '../components/servicePageHeader/ServicePageHeader';
import {SERVICES} from '../constants';
import {ISection, IService} from '../entities';
import {ServiceCard} from '../components/serviceCard';
import {SectionTitle} from '../components/sectionTitle';

const ServicesPagePC: IDefaultFC = () => {
  const renderService = useCallback<(service: IService, index: number) => React.JSX.Element>((service, index) => {
    const key = `${service.name}_${index}`;
    const className = index === 0 ? '' : 'mt-[64px]';
    const isReversed = !!(index % 2);
    return (
      <div key={key} className={className}>
        <ServiceCard isRowReversed={isReversed} service={service} />
      </div>
    );
  }, []);

  const renderSection = useCallback<(serviceSection: ISection, index: number) => React.JSX.Element>(
    (serviceSection, index) => {
      const key = `${serviceSection.title}_${index}`;
      return (
        <div key={key} className="mt-[80px]">
          <div className="mb-10">
            <SectionTitle title={serviceSection.title} subtitle={serviceSection.subtitle} />
          </div>
          {serviceSection.data.map((service, index) => renderService(service, index))}
        </div>
      );
    },
    [renderService],
  );

  return (
    <div className="min-h-[100%] flex flex-col align-center px-[20.94%] py-[80px] bg-black">
      <ServicePageHeader />
      <div>{SERVICES.map((serviceSectionItem, index) => renderSection(serviceSectionItem, index))}</div>
    </div>
  );
};

export default ServicesPagePC;
