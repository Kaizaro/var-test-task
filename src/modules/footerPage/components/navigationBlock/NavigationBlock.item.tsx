import {COLORS, IDefaultFC, TextENBoldSM, TextJABoldMD} from '@/src/shared';
import React, {useMemo} from 'react';
import {INavigationBlockSectionItem} from './NavigationBlock.types';

const NavigationBlockItem: IDefaultFC<INavigationBlockSectionItem> = ({name, url, isTitle}) => {
  const Text = useMemo(
    () =>
      isTitle ? (
        <TextJABoldMD color={COLORS.gray_100}>{name}</TextJABoldMD>
      ) : (
        <TextENBoldSM color={COLORS.gray_666}>{name}</TextENBoldSM>
      ),
    [isTitle, name],
  );

  return <a href={url}>{Text}</a>;
};

export {NavigationBlockItem};
