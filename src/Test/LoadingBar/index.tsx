import React from 'react';
import { LoadingBar, FullPageLoadingBar } from 'components/LoadingBar';

const Default = () => <LoadingBar width="40px" />;

export const FullPage = () => <FullPageLoadingBar width="50px" backgroundColor="lightgrey" />;

export default Default;
