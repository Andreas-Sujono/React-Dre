import React from 'react';
import { render } from '@testing-library/react';
import LoadingBar, { FullPageLoadingBar } from '../LoadingBar';

it('Should render loadingbar successfully', async () => {
  render(<LoadingBar width="50px" />);
});

it('Should render FullPageLoadingBar successfully', async () => {
  render(<FullPageLoadingBar width="50px" backgroundColor="grey" />);
});
