import React from 'react';
import { render } from '@testing-library/react';
import ClickOutsidehandler from '..';

it('Should render ClickOutsidehandler successfully', async () => {
  render(
    <ClickOutsidehandler onOutsideClick={() => null}>
      <div>
        content inside
      </div>
    </ClickOutsidehandler>
  );
});
