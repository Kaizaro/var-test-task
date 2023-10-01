import React, {useMemo} from 'react';
import {IButton} from '../types';
import {IDefaultFC} from '@/src/shared';

const ButtonPrimary: IDefaultFC<IButton> = ({title = 'テキスト', size = 'large', handleButtonPress}) => {
  const className = useMemo(() => {
    switch (size) {
      case 'small':
        return {button: 'px-[24px] py-[12px] bg-accent rounded-[999px] min-w-[160px] items-center justify-center', text: 'text-black text-center'};
      case 'medium':
        return {button: 'px-[32px] py-[16px] bg-accent rounded-[999px] min-w-[240px] items-center justify-center', text: 'text-black text-center'};
      case 'large':
        return {button: 'px-[48px] py-[24px] bg-accent rounded-[999px] min-w-[320px] items-center justify-center', text: 'text-black text-center'};
    }
  }, [size]);

  return (
    <button className={className.button} onClick={handleButtonPress}>
      <p className={className.text}>{title}</p>
    </button>
  );
};

export {ButtonPrimary};
