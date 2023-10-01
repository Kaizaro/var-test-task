import React, {FC, useCallback} from 'react';

import {ButtonPrimary, ButtonSecondary, Logo, TextJABoldMD, scaleHorizontal, scaleVertical} from '@/src/shared';
import {HOME_HEADER_MENU_BUTTONS, IHomeHeaderMenuButton} from '.';
import {WINDOW_WIDTH} from '@/pages/_app';

const HomeHeader: FC = () => {
  const renderMenuItem = useCallback<(menuButtonItem: IHomeHeaderMenuButton, index: number) => JSX.Element>((menuButtonItem) => (
    <a href={menuButtonItem.route}>
        <TextJABoldMD>{menuButtonItem.title}</TextJABoldMD>
      </a>
  ), []);

  return (
    <div className={`px-[${scaleHorizontal(40)}px] py-[${scaleVertical(16)}px] bg-white rounded-[${scaleVertical(16)}px] justify-between flex-row`}>
      <Logo size={scaleVertical(48)} />
      <div className={'flex-row'}>
        {HOME_HEADER_MENU_BUTTONS.map((menuButtonItem, index) => renderMenuItem(menuButtonItem, index))}
        <div className={'flex-row'}>
          <ButtonPrimary title='お問い合わせ' size='small' />
          <ButtonSecondary title='資料ダウンロード' size='small' />
        </div>
      </div>
    </div>
  );
};

export {HomeHeader};
