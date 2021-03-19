import React from 'react';
import { render } from '@testing-library/react';
import UrlCopyCard from '../UrlCopyCard';

it('Should render UrlCopyCard successfully', async () => {
  render(
    <UrlCopyCard url="www.google.com" width="300px" />
  );
});
