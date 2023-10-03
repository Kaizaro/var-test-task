import React from 'react';
import {BaseButtonPrimary, IButton, IDefaultFC, TextJABoldSM} from '@/src/shared';

const ButtonPrimarySmall: IDefaultFC<IButton> = (props) => {
  return (
    <BaseButtonPrimary size={'small'} minWidth={160} paddingVertical={12} paddingHorizontal={24} {...props}>
      <TextJABoldSM>{props.title}</TextJABoldSM>
    </BaseButtonPrimary>
  );
};

export {ButtonPrimarySmall};
