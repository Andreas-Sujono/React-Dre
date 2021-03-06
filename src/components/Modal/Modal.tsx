import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  ModalContainer, Overlay, ModalContentContainer
} from './Style';

interface Styles {
  contentContainerStyle?: Record<string, any>;
  overlayStyle?: Record<string, any>;
}

export interface IModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  styles?: Styles;
  shouldCloseOnOverlayClick?: boolean;
  showTransition?: boolean;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  isOpen,
  onRequestClose,
  children,
  styles = {
    contentContainerStyle: {},
    overlayStyle: {}
  },
  shouldCloseOnOverlayClick = false,
  showTransition = true
}) => {
  const modalContainerId = 'react-dre-modal-container';
  const modalId = 'react-dre-modal';

  const [modalContainerElement] = useState(() => {
    const modalDiv = document.createElement('div');
    modalDiv.setAttribute('id', modalContainerId);
    return modalDiv;
  });

  const elementExists = () => document.body.contains(document.getElementById(modalContainerId));

  useEffect(() => {
    if (!elementExists()) document.body.appendChild(modalContainerElement);
    return () => {
      if (modalContainerElement && elementExists()) {
        document.body.removeChild(modalContainerElement);
      }
    };
  }, []);

  const closeModal = () => {
    onRequestClose();
    if (modalContainerElement && elementExists()) {
      document.body.removeChild(modalContainerElement);
    }
  };

  const parsedContentContainerStyle = { ...styles.contentContainerStyle };
  delete parsedContentContainerStyle.transform;
  delete parsedContentContainerStyle.transformBefore;

  const renderModal = (_children: React.ReactNode) => (
    <ModalContainer id={modalId}>
      <Overlay
        className="react-dre-modal-overlay"
        onClick={() => {
          if (shouldCloseOnOverlayClick) closeModal();
        }}
        style={styles.overlayStyle}
      />
      <ModalContentContainer
        className="react-dre-modal-content-container"
        style={styles.contentContainerStyle}
        contentContainerStyle={styles.contentContainerStyle}
        showTransition={showTransition}
      >
        {_children}
      </ModalContentContainer>
    </ModalContainer>
  );

  if (!isOpen) return null;
  return ReactDOM.createPortal(renderModal(children), modalContainerElement);
};

export default Modal;