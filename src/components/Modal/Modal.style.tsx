import styled, { keyframes, css } from 'styled-components';
// import transition from 'styled-transition-group';
import { IModalProps } from './Modal';

// TODO: change animation to the react transition group
export const ModalContainer = styled.div.attrs({
  className: 'react-dre-modal-container'
})`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
`;

const backgroundFade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
    }
`;
export const Overlay = styled.div.attrs({
  className: 'modal-overlay'
})`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.style.backgroundColor
        || props.style.background
        || 'rgba(185, 185, 185, 0.75)'};
    animation: ${backgroundFade} 0.15s linear;
    animation-fill-mode: forwards;
`;

const moveToBottom = (injectedTransformBefore = '', injectedTransform = '') => keyframes`
  from {
    transform: ${injectedTransformBefore || 'translate(-50%, calc(-50% - 100px))'};
  }

  to {
    transform: ${injectedTransform || 'translate(-50%, -50%)'}
    }
`;

export const ModalContentContainer = styled.div.attrs({
  className: 'modal-content-container'
})`
  > *{
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 8px;
      padding: 8px;
      ${(props: IModalProps) => (props.showTransition ? css`
          animation: ${moveToBottom(
      props.styles?.contentContainerStyle?.transformBefore,
      props.styles?.contentContainerStyle?.transform
    )} 0.15s ease-out;
          animation-fill-mode: forwards;
      ` : css`transform: translate(-50%, -50%)`)}
  }
`;

// const getTopPositionBeforeAnimation = (showAnimation, styles) => {
//   const defaultTopWithoutAnimation = '50%';
//   const defaultTop = 'calc(50% - 100px)';
//   if (!showAnimation) return defaultTopWithoutAnimation;
//   return styles?.contentContainerStyle?.topBefore || defaultTop;
// };

// export const ModalContentContainer = transition.div.attrs({
//   className: 'modal-content-container'
// })`
//   > *{
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     border-radius: 8px;
//     padding: 8px;
//   }

//   &:enter { top: ${(props) => getTopPositionBeforeAnimation(props.showAnimation, props.styles)}
//   &:enter-active {
//     top: ${(props) => props.styles?.contentContainerStyle?.top || '50%'};
//     transition: top 1000ms ease-out;
//   }
//   &:exit {
//   }
//   &:exit-active {
//   }
// `;
