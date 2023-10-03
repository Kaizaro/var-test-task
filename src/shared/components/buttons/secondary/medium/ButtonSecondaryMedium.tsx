import React from 'react';
import {BaseButtonSecondary, IButton, IDefaultFC, TextJABoldMD} from '@/src/shared';

const ButtonSecondaryMedium: IDefaultFC<IButton> = (props) => {
  return (
    <BaseButtonSecondary size={'medium'} minWidth={320} paddingVertical={16} paddingHorizontal={32} {...props}>
      <TextJABoldMD>{props.title}</TextJABoldMD>
    </BaseButtonSecondary>
  );
};

export {ButtonSecondaryMedium};
