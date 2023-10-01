const DESIGN_SCREEN_WIDTH = 1920;
const DESIGN_SCREEN_HEIGHT = 1080;

export const scaleHorizontal = (valueInPx = 1) => {
  const deltaWidth = window.screen.width / DESIGN_SCREEN_WIDTH;
  return valueInPx * deltaWidth;
};

export const scaleVertical = (valueInPx = 1) => {
  const deltaHeight = window.screen.height / DESIGN_SCREEN_HEIGHT;
  return valueInPx * deltaHeight;
};