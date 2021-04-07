import React, { memo } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import {
  GlobalStyle
} from './Modal.style';

export interface Styles {
  overlayStyle?: Record<string, any>;
  contentStyle?: Record<string, any>;
}

export interface IModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  styles?: Styles;
  shouldCloseOnOverlayClick?: boolean;
  reactModalProps?: Partial<ReactModalProps>;
}

const TRANSITION_DURATION = 200;
const DEFAULT_APP_ELEMENT = '#root';
export const FLOATING_TRANSITION = `${TRANSITION_DURATION}ms ease-in-out`;
export const FIXED_TRANSITION = `${TRANSITION_DURATION}ms cubic-bezier(0, 0.37, 0.64, 1)`;

const Modal: React.FunctionComponent<IModalProps> = ({
  isOpen,
  handleClose,
  children,
  styles = {
    overlayStyle: {
      background: 'rgba(12, 15, 20, 0.21)',
      zIndex: 5,
    },
    contentStyle: {
    }
  },
  shouldCloseOnOverlayClick = false,
  reactModalProps = {}
}) => {
  ReactModal.setAppElement(DEFAULT_APP_ELEMENT);

  const contentStyle = {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    ...styles.contentStyle
  };

  const finalReactModalProps = {
    isOpen,
    shouldCloseOnOverlayClick,
    htmlOpenClassName: 'ReactModal__Html--open',
    contentLabel: 'Modal',
    onRequestClose: handleClose,
    closeTimeoutMS: TRANSITION_DURATION,
    style: {
      content: contentStyle,
      overlay: styles.overlayStyle
    },
    ...reactModalProps,
  };

  return (
    <ReactModal {...finalReactModalProps}>
      { (typeof (children) === 'function')
        ? children({
          onClose: handleClose,
        })
        : children}
      {isOpen && <GlobalStyle />}
    </ReactModal>
  );
};

export default memo(Modal);
