import {TNullable} from '@/src/shared';

export const goToOtherUrl = (url?: TNullable<string>) => {
  if (url) window.location.href = url;
};
