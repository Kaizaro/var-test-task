import {ButtonPrimaryMedium, ButtonSecondaryMedium, IDefaultFC, URL_ROUTES, goToOtherUrl} from '@/src/shared';
import React, {useCallback} from 'react';
import {INavigationBlockSectionItem, NAVIGATION_BLOCK_SECTIONS, NavigationBlockItem} from '.';

const NavigationBlock: IDefaultFC = () => {
  const handleMainButtonPress = useCallback(() => {
    goToOtherUrl(URL_ROUTES.CONTACT);
  }, []);

  const handleSecondaryButtonPress = useCallback(() => {
    goToOtherUrl(URL_ROUTES.DOWNLOAD);
  }, []);

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
      const className = index === 0 ? 'flex flex-col' : 'flex flex-col ml-[40px]';
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
      <div className="flex flex-row">
        {NAVIGATION_BLOCK_SECTIONS.map((item, index) => renderNavigationSection(item, index))}
      </div>
      <div className="mt-6 items-end self-end flex flex-row">
        <div>
          <ButtonPrimaryMedium handleButtonPress={handleMainButtonPress}>{'お問い合わせ'}</ButtonPrimaryMedium>
        </div>
        <div className="ml-2">
          <ButtonSecondaryMedium handleButtonPress={handleSecondaryButtonPress}>
            {'資料ダウンロード'}
          </ButtonSecondaryMedium>
        </div>
      </div>
    </div>
  );
};

export default NavigationBlock;
