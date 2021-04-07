import React, { useState } from 'react';
import Modal, { CloseButton } from 'components/Modal';
import Button from 'components/Button';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    width: '400px',
    height: '200px',
    background: 'white',
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">open modal</Button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} shouldCloseOnOverlayClick>
        <div style={style}>
          Test
        </div>
      </Modal>
    </>
  );
};

export const ModalWithCloseButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    width: '400px',
    height: '200px',
    background: 'white',
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">open modal</Button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} shouldCloseOnOverlayClick>
        {
          ({ onClose }) => (
            <div style={style}>
              <CloseButton onClick={onClose} />
              Test
            </div>
          )
        }
      </Modal>
    </>
  );
};
