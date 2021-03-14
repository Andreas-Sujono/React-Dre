import React, { useState } from 'react';
import Modal from 'components/Modal';

export default () => {
  // const [render, setRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      <button onClick={() => setIsOpen(true)} type="button">open modal</button>
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
