import React, {FC, useCallback} from 'react';

import {ButtonPrimary, ButtonSecondary, Logo, TextJABoldMD} from '@/src/shared';
import {HOME_HEADER_MENU_BUTTONS, IHomeHeaderMenuButton} from '.';

const HomeHeader: FC = () => {
  const renderMenuItem = useCallback<(menuButtonItem: IHomeHeaderMenuButton, index: number) => React.JSX.Element>((menuButtonItem, index) => (
    <a key={`${menuButtonItem.title}_${index}`} href={menuButtonItem.route} className={index === 0 ? '' : 'ml-6'}>
        <TextJABoldMD>{menuButtonItem.title}</TextJABoldMD>
      </a>
  ), []);

  return (
    <div className={'px-[3.125%] py-4 bg-white rounded-[16px] justify-between self-center items-center flex flex-row w-[100%]'}>
      <Logo size={48} />
      <div className={'flex-row inline items-center'}>
        {HOME_HEADER_MENU_BUTTONS.map((menuButtonItem, index) => renderMenuItem(menuButtonItem, index))}
        <div className={'flex-row inline ml-10'}>
          <ButtonPrimary title='お問い合わせ' size='small' />
          <div className={'ml-2 inline'}>
            <ButtonSecondary title='資料ダウンロード' size='small' />
          </div>
        </div>
      </div>
    </div>
  );
};

export {HomeHeader};
