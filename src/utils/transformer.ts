export const getSizeString = (size: number | string) =>
  (typeof (size) === 'number' ? `${size}px` : size);

export const toCamelCase = (obj: Record<string, any>) => obj;
export const toSnakeCase = (obj: Record<string, any>) => obj;
