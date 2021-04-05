import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal', () => {
  beforeEach(() => {
    render(<div id="root">App</div>);
  });

  it('Should render Modal successfully', async () => {
    render(
      <Modal isOpen handleClose={() => null}>
        <div>Modal Content</div>
      </Modal>
    );
  });
});
