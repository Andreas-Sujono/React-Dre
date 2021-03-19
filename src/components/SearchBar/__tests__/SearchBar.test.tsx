import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../SearchBar';

it('Should render SearchBar successfully', async () => {
  render(
    <SearchBar
      value="Search"
      onChange={() => null}
      width="200px"
    />
  );
});
