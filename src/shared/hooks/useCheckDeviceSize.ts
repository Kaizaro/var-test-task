import {MIN_DESKTOP_WIDTH} from './../theme/minDesktopWidth';
import {useMediaQuery} from 'react-responsive';

const useDeviceSize = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${MIN_DESKTOP_WIDTH}px)`,
  });

  return {isDesktop};
};

export {useDeviceSize};
