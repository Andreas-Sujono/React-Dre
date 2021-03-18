import styled from 'styled-components';

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem 2rem;
    border: 1px solid transparent;
    outline: 0;
    background: transparent;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    font-size: 1rem;
    border-radius: 1rem;
    transition: color .15s ease-in-out,
        background-color .15s ease-in-out,
        border-color .15s ease-in-out,
        box-shadow .15s ease-in-out;
    cursor: pointer;
    position: relative;

    .dre-button-name{
        visibility: ${(props) => (props.isLoading ? 'hidden' : 'visible')};
    }
    .dre-loading-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover{
        filter: brightness(90%);
    }
    &:active{
        filter: brightness(95%);
    }
    &:focus{
        outline: 0;
        box-shadow: rgb(175, 208, 254) 0px 0px 2px 3px;
    }
    &:disabled{
        filter: brightness(90%);
    }
`;

export const ButtonGroupContainer = styled.div`

`;
