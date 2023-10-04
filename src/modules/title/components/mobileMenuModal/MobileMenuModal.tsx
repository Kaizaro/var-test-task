import {ButtonPrimaryLarge, ButtonSecondaryLarge, IDefaultFC, Logo, TextJABoldMD} from '@/src/shared';
import React, {useCallback} from 'react';
import {HOME_HEADER_MENU_BUTTONS, IHomeHeaderMenuButton} from '..';
import Image from 'next/image';
import closeIcon from '../../../../../public/common/close@3x.png';
import {IMobileMenuModal} from './MobileMenuModal.types';

const MobileMenuModal: IDefaultFC<IMobileMenuModal> = ({isVisible, handleCloseMenu}) => {
  const renderMenuItem = useCallback<(menuButtonItem: IHomeHeaderMenuButton, index: number) => React.JSX.Element>(
    (menuButtonItem, index) => (
      <a key={`${menuButtonItem.title}_${index}`} href={menuButtonItem.route} className={index === 0 ? '' : 'ml-6'}>
        <TextJABoldMD>{menuButtonItem.title}</TextJABoldMD>
      </a>
    ),
    [],
  );

  return (
    isVisible && (
      <div>
        <div>
          <Logo size={40} />
          <button>
            <Image src={closeIcon} width={40} height={40} alt="close_icon" onClick={handleCloseMenu} />
          </button>
        </div>
        {HOME_HEADER_MENU_BUTTONS.map((menuButtonItem, index) => renderMenuItem(menuButtonItem, index))}
        <div className={'mt-10'}>
          <ButtonPrimaryLarge minWidth={'100%'} title={'お問い合わせ'} />
          <div className={'mt-2'}>
            <ButtonSecondaryLarge minWidth={'100%'} title={'資料ダウンロード'} />
          </div>
        </div>
      </div>
    )
  );
};

export {MobileMenuModal};
