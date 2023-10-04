import React, {useCallback} from 'react';
import {IDefaultFC} from '@/src/shared';
import {SERVICES} from '../constants';
import {ISection, IService} from '../entities';
import {ServiceCard, ServiceCardMobile} from '../components/serviceCard';
import {SectionTitleMobile} from '../components/sectionTitle';
import {ServicePageHeaderMobile} from '..';

const ServicesPageMobile: IDefaultFC = () => {
  const renderService = useCallback<(service: IService, index: number) => React.JSX.Element>((service, index) => {
    const key = `${service.name}_${index}`;
    const className = index === 0 ? '' : 'mt-10';
    return (
      <div key={key} className={className}>
        <ServiceCardMobile service={service} />
      </div>
    );
  }, []);

  const renderSection = useCallback<(serviceSection: ISection, index: number) => React.JSX.Element>(
    (serviceSection, index) => {
      const key = `${serviceSection.title}_${index}`;
      return (
        <div key={key} className="mt-[80px]">
          <div className="mb-10">
            <SectionTitleMobile title={serviceSection.title} subtitle={serviceSection.subtitle} />
          </div>
          {serviceSection.data.map((service, index) => renderService(service, index))}
        </div>
      );
    },
    [renderService],
  );

  return (
    <div className="min-h-[100%] flex flex-col align-center px-[4.45%] py-[80px] bg-black">
      <ServicePageHeaderMobile />
      <div>{SERVICES.map((serviceSectionItem, index) => renderSection(serviceSectionItem, index))}</div>
    </div>
  );
};

export {ServicesPageMobile};
