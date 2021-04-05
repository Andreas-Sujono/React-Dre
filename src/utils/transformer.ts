import queryString from 'query-string';

export const getSizeString = (size: number | string) =>
  (typeof (size) === 'number' ? `${size}px` : size);

export const transformQueryparams = (
  queries: string,
  includeKeys: string[] = [],
  addedObj: Record<string, any> = {}
) => {
  const params: any = {};

  includeKeys.forEach((item) => {
    params[item] = '';
  });

  const obj = queryString.parse(queries);

  Object.keys(obj).forEach((key) => {
    if (key in params) params[key] = obj[key];
  });

  Object.keys(params).forEach((key) => {
    if (!params[key]) delete params[key];
  });
  const queryResult = queryString.stringify({ ...params, ...addedObj });

  if (queryResult) return `?${queryResult}`;
  return '';
};
