import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingFullPageContainer = styled(LoadingContainer)`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.9);
    z-index:30;
`;
