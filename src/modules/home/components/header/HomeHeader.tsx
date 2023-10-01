import React, {FC, useCallback} from 'react';

import {ButtonPrimary, ButtonSecondary, Logo, TextJABoldMD, scaleHorizontal, scaleVertical} from '@/src/shared';
import {HOME_HEADER_MENU_BUTTONS, IHomeHeaderMenuButton} from '.';

const HomeHeader: FC = () => {
  const renderMenuItem = useCallback<(menuButtonItem: IHomeHeaderMenuButton, index: number) => JSX.Element>((menuButtonItem) => (
    <span>
      <a href={menuButtonItem.route}>
        <TextJABoldMD>{menuButtonItem.title}</TextJABoldMD>
      </a>
    </span>
  ), []);

  return (
    <div className={`px-[${scaleHorizontal(40)}] py-[${scaleVertical(16)}] bg-white rounded-[${scaleVertical(16)}] justify-between flex-row`}>
      <Logo size={48} />
      <span>
        {HOME_HEADER_MENU_BUTTONS.map((menuButtonItem, index) => renderMenuItem(menuButtonItem, index))}
        <span>
          <ButtonPrimary title='お問い合わせ' size='small' />
          <ButtonSecondary title='資料ダウンロード' size='small' />
        </span>
      </span>
    </div>
  );
};

export {HomeHeader};
