/**
 * reducer state will have this format
 * {...data, isLoading, isLoadFailed, canceler, isFetched, error}
 *
 */
// TODO: pass state type, canceler type, error type
export const initEntityState = (state: any) => ({
  ...state,
  isLoading: false,
  isLoadFailed: false,
  isFetched: false,
  canceler: null,
  error: null,
});

export const entityLoadingStarted = (state: any, data: Partial<Record<string, any>> = {}) => {
  const { canceler } = data;
  return {
    ...state,
    isLoading: true,
    isLoadFailed: false,
    error: null,
    canceler,
    ...data,
  };
};

export const entityLoadingSucceeded = (state: any, data: Record<string, any> = {}) => {
  if (!data) data = {};
  return {
    ...state,
    isLoading: false,
    isLoadFailed: false,
    canceler: null,
    isFetched: true,
    error: null,
    ...data,
  };
};

export const entityLoadingFailed = (state: any, data: Record<string, any> = {}) => {
  const { error } = data;

  return {
    ...state,
    isLoading: false,
    isLoadFailed: true,
    canceler: null,
    isFetched: true,
    error,
    ...data,
  };
};
