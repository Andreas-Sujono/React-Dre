export const getSizeString = (size: number | string) =>
  (typeof (size) === 'number' ? `${size}px` : size);

export const toCamelCase = (obj: Record<string, any>) => obj;
export const toSnakeCase = (obj: Record<string, any>) => obj;

export const capitalize = (string: string) => {
  let list = string.split(' ');
  list = list.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return list.join('');
};
