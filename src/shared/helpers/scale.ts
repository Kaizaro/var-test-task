export const getTailwindValue = (valueInPx: number) => {
  const pxInTailwindUnit = 4;
  return valueInPx / pxInTailwindUnit;
};

export const getRemValue = (valueInPx: number) => {
  const pxInRemUnit = 16;
  return `${valueInPx / pxInRemUnit}rem`;
};