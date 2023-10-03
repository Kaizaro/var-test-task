import React from 'react';
import {BaseButtonPrimary, IButton, IDefaultFC, TextJABoldXL} from '@/src/shared';

const ButtonPrimaryLarge: IDefaultFC<IButton> = (props) => {
  return (
    <BaseButtonPrimary size={'large'} minWidth={320} paddingVertical={24} paddingHorizontal={48} {...props}>
      <TextJABoldXL>{props.title}</TextJABoldXL>
    </BaseButtonPrimary>
  );
};

export {ButtonPrimaryLarge};
