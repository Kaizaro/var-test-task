import React from 'react';
import {BaseButtonPrimary, IButton, IDefaultFC, TextJABoldMD} from '@/src/shared';

const ButtonPrimaryMedium: IDefaultFC<IButton> = (props) => {
  return (
    <BaseButtonPrimary size={'medium'} minWidth={320} paddingVertical={16} paddingHorizontal={32} {...props}>
      <TextJABoldMD>{props.title}</TextJABoldMD>
    </BaseButtonPrimary>
  );
};

export {ButtonPrimaryMedium};
