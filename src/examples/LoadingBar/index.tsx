import React from 'react';
import { LoadingBar, FullPageLoadingBar } from 'components/LoadingBar';

const LoadingBarExample = () => <LoadingBar width="40px" />;

const FullPageLoadingBarExample = () => <FullPageLoadingBar width="50px" backgroundColor="#e9e9e9" />;

export default LoadingBarExample;
export {
  LoadingBarExample,
  FullPageLoadingBarExample
};
