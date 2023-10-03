import React from 'react';
import {BaseButtonSecondary, IButton, IDefaultFC, TextJABoldSM} from '@/src/shared';

const ButtonSecondarySmall: IDefaultFC<IButton> = (props) => {
  return (
    <BaseButtonSecondary size={'small'} minWidth={160} paddingVertical={12} paddingHorizontal={24} {...props}>
      <TextJABoldSM>{props.title}</TextJABoldSM>
    </BaseButtonSecondary>
  );
};

export {ButtonSecondarySmall};
