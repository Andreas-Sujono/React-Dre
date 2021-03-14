import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../Modal';

it('Should render Modal successfully', async () => {
  render(
    <Modal isOpen onRequestClose={() => null}>
      <div>Modal Content</div>
    </Modal>
  );
});
