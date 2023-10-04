import {ButtonPrimaryMedium, ButtonSecondaryMedium, IDefaultFC} from '@/src/shared';
import React, {useCallback} from 'react';
import {INavigationBlockSectionItem, NAVIGATION_BLOCK_SECTIONS, NavigationBlockItem} from '.';

const NavigationBlockMobile: IDefaultFC = () => {
  const renderNavigationSectionItem = useCallback<
    (sectionItem: INavigationBlockSectionItem, sectionItemIndex: number) => React.JSX.Element
  >((sectionItem, sectionItemIndex) => {
    const key = `${sectionItem.name}_${sectionItemIndex}`;
    const className = sectionItemIndex === 0 ? '' : 'mt-[5px]';
    return (
      <div className={className}>
        <NavigationBlockItem key={key} {...sectionItem} />
      </div>
    );
  }, []);

  const renderNavigationSection = useCallback<
    (section: INavigationBlockSectionItem[], index: number) => React.JSX.Element
  >(
    (section, index) => {
      const key = `${index}`;
      const className = index === 0 ? '' : 'mt-4';
      return (
        <div key={key} className={className}>
          {section.map((item, sectionIndex) => renderNavigationSectionItem(item, sectionIndex))}
        </div>
      );
    },
    [renderNavigationSectionItem],
  );

  return (
    <div className="flex flex-col">
      <div className="mt-10">
        {NAVIGATION_BLOCK_SECTIONS.map((item, index) => renderNavigationSection(item, index))}
      </div>
      <div className="mt-6 items-center self-center">
        <div>
          <ButtonPrimaryMedium>{'お問い合わせ'}</ButtonPrimaryMedium>
        </div>
        <div className="mt-2">
          <ButtonSecondaryMedium>{'資料ダウンロード'}</ButtonSecondaryMedium>
        </div>
      </div>
    </div>
  );
};

export default NavigationBlockMobile;
