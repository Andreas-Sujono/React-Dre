export const getSizeString = (size: number | string) =>
  (typeof (size) === 'number' ? `${size}px` : size);
