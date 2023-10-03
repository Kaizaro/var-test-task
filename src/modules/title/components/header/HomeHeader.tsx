import React, {FC, useCallback} from 'react';

import {ButtonPrimarySmall, ButtonSecondarySmall, Logo, TextJABoldMD} from '@/src/shared';
import {HOME_HEADER_MENU_BUTTONS, IHomeHeaderMenuButton} from '.';

const HomeHeader: FC = () => {
  const renderMenuItem = useCallback<(menuButtonItem: IHomeHeaderMenuButton, index: number) => React.JSX.Element>(
    (menuButtonItem, index) => (
      <a key={`${menuButtonItem.title}_${index}`} href={menuButtonItem.route} className={index === 0 ? '' : 'ml-6'}>
        <TextJABoldMD>{menuButtonItem.title}</TextJABoldMD>
      </a>
    ),
    [],
  );

  return (
    <div
      className={
        'px-[3.125%] py-4 bg-white rounded-[16px] justify-between self-center items-center flex flex-row w-[100%]'
      }>
      <Logo size={48} />
      <div className={'flex-row inline items-center'}>
        {HOME_HEADER_MENU_BUTTONS.map((menuButtonItem, index) => renderMenuItem(menuButtonItem, index))}
        <div className={'flex-row inline ml-10'}>
          <ButtonPrimarySmall minWidth={183} title={'お問い合わせ'} />
          <div className={'ml-2 inline'}>
            <ButtonSecondarySmall minWidth={183} title={'資料ダウンロード'} isBorder />
          </div>
        </div>
      </div>
    </div>
  );
};

export {HomeHeader};
