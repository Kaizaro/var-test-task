import {WINDOW_HEIGHT, WINDOW_WIDTH} from "@/pages/_app";
import {isNumber} from "lodash";

const DESIGN_SCREEN_WIDTH = 1920;
const DESIGN_SCREEN_HEIGHT = 1080;

export const scaleHorizontal = (valueInPx = 1) => {
  const deltaWidth = isNumber(WINDOW_WIDTH.current) ? WINDOW_WIDTH.current / DESIGN_SCREEN_WIDTH : 1;
  return valueInPx * deltaWidth;
};

export const scaleVertical = (valueInPx = 1) => {
  const deltaHeight = isNumber(WINDOW_HEIGHT.current) ? WINDOW_HEIGHT.current / DESIGN_SCREEN_HEIGHT : 1;
  return valueInPx * deltaHeight;
};