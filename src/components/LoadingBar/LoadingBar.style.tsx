import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface ILoadingFullPageContainerProps{
  backgroundColor: string;
}
export const LoadingFullPageContainer = styled(LoadingContainer) < ILoadingFullPageContainerProps > `
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.backgroundColor || 'white'};
    z-index:30;
`;
