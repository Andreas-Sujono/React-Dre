import { createGlobalStyle } from 'styled-components';
import {
  // FLOATING_TRANSITION,
  FIXED_TRANSITION
} from './Modal';

export const GlobalStyle = createGlobalStyle`
  .ReactModalPortal{
    .ReactModal__Overlay{
      bottom: 0;
      left: 0;
      opacity: 0;
      position: fixed;
      right: 0;
      top: 0;
      transition: all 200ms ease-in-out;
    }

    .ReactModal__Overlay--after-open{
      opacity: 1;
    }

    .ReactModal__Overlay--before-close{
      opacity: 0;
    }

    .ReactModal__Content{
      transition: all ${FIXED_TRANSITION};
      opacity: 0;
      transform: translate(-50%, -50%);
      position: relative;
    }

    .ReactModal__Content--before-close{
      opacity: 0;
    }

    .ReactModal__Content--after-open{
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  .ReactModal__Html--open {
    height: 100%;
    overflow-y: hidden;
    -webkit-overflow-scrolling: auto;
  }
`;

export default GlobalStyle;
