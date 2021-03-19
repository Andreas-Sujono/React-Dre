import styled from 'styled-components';

export const LoadingContainer = styled.div.attrs(
  { className: 'dre-loading-bar' }
)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingFullPageContainer = styled(LoadingContainer).attrs(
  { className: 'dre-loading-full-page' }
)`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.backgroundColor || 'white'};
    z-index:30;
`;
