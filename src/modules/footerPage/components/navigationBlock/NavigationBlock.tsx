import {ButtonPrimaryMedium, ButtonSecondaryMedium, IDefaultFC} from '@/src/shared';
import React, {useCallback} from 'react';
import {INavigationBlockSectionItem, NAVIGATION_BLOCK_SECTIONS, NavigationBlockItem} from '.';

const NavigationBlock: IDefaultFC = () => {
  const renderNavigationSectionItem = useCallback<
    (sectionItem: INavigationBlockSectionItem, sectionItemIndex: number) => React.JSX.Element
  >((sectionItem, sectionItemIndex) => {
    const key = `${sectionItem.name}_${sectionItemIndex}`;
    return <NavigationBlockItem key={key} {...sectionItem} />;
  }, []);

  const renderNavigationSection = useCallback<
    (section: INavigationBlockSectionItem[], index: number) => React.JSX.Element
  >(
    (section, index) => {
      const key = `${index}`;
      return (
        <div key={key}>{section.map((item, sectionIndex) => renderNavigationSectionItem(item, sectionIndex))}</div>
      );
    },
    [renderNavigationSectionItem],
  );

  return (
    <div>
      <div>{NAVIGATION_BLOCK_SECTIONS.map((item, index) => renderNavigationSection(item, index))}</div>
      <div className="mt-6">
        <ButtonPrimaryMedium>{'お問い合わせ'}</ButtonPrimaryMedium>
        <ButtonSecondaryMedium>{'資料ダウンロード'}</ButtonSecondaryMedium>
      </div>
    </div>
  );
};

export default NavigationBlock;
