import React, { useState } from 'react';
import Modal from 'components/Modal';

export default () => {
  // const [render, setRender] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  // const [isOpen2, setIsOpen2] = useState(true);

  const style = {
    width: '40%',
    height: '400px',
    background: 'white',
  };

  // useEffect(() => {
  //   setTimeout(() => setRender(true), 3000);
  // }, []);

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} shouldCloseOnOverlayClick>
        <div style={style}>
          Test
        </div>
      </Modal>
      {/* {render && (
      <Modal isOpen={isOpen2} onRequestClose={() => setIsOpen2(false)} shouldCloseOnOverlayClick>
        <div style={style}>
          Test
        </div>
      </Modal>
      )} */}
    </>
  );
};
