import React from 'react';
import {BaseButtonSecondary, IButton, IDefaultFC, TextJABoldXL} from '@/src/shared';

const ButtonSecondaryLarge: IDefaultFC<IButton> = (props) => {
  return (
    <BaseButtonSecondary size={'large'} minWidth={320} paddingVertical={24} paddingHorizontal={48} {...props}>
      <TextJABoldXL>{props.title}</TextJABoldXL>
    </BaseButtonSecondary>
  );
};

export {ButtonSecondaryLarge};
