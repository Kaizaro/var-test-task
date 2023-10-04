import {ButtonPrimaryLarge, ButtonSecondaryLarge, IDefaultFC, Logo, TextJABoldMD} from '@/src/shared';
import React, {useCallback} from 'react';
import {HOME_HEADER_MENU_BUTTONS, IHomeHeaderMenuButton} from '..';
import Image from 'next/image';
import closeIcon from '../../../../../public/common/close@3x.png';
import {IMobileMenuModal} from './MobileMenuModal.types';

const MobileMenuModal: IDefaultFC<IMobileMenuModal> = ({isVisible, handleCloseMenu}) => {
  const renderMenuItem = useCallback<(menuButtonItem: IHomeHeaderMenuButton, index: number) => React.JSX.Element>(
    (menuButtonItem, index) => (
      <a key={`${menuButtonItem.title}_${index}`} href={menuButtonItem.route} className={index === 0 ? '' : 'mt-6'}>
        <TextJABoldMD>{menuButtonItem.title}</TextJABoldMD>
      </a>
    ),
    [],
  );

  return (
    isVisible && (
      <div
        className={
          'fixed z-20 top-0 bottom-0 right-0 left-0 w-[100%] h-[100%] bg-black px-[8.89%] py-[3.75%] flex flex-col'
        }>
        <div className="flex flex-row items-center justify-between">
          <Logo size={40} />
          <button>
            <Image src={closeIcon} width={40} height={40} alt="close_icon" onClick={handleCloseMenu} />
          </button>
        </div>
        <div className="mt-[6.25%]">
          {HOME_HEADER_MENU_BUTTONS.map((menuButtonItem, index) => renderMenuItem(menuButtonItem, index))}
          <div className={'mt-10'}>
            <ButtonPrimaryLarge minWidth={'100%'} title={'お問い合わせ'} />
            <div className={'mt-2'}>
              <ButtonSecondaryLarge minWidth={'100%'} title={'資料ダウンロード'} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export {MobileMenuModal};
