import styled from 'styled-components';

export const CardContainer = styled.div`
    width: ${(props) => props.widthString}; 
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 8px;
    padding: 0;
`;

export const InputContainer = styled.input`
    width: 90%;
    background-color: ${(props) => props.backgroundColor};
    border-radius: ${(props) => (props.iconPosition === 'left' ? '0 8px 8px 0' : '8px 0 0 8px')};
    border: 0;
    padding: 8px 12px;
    margin-right: 1px;
    font-size: 14px;
    line-height: 16px;
    color: #73748F;

    &:hover{
        cursor: auto;
    }
`;

export const IconContainer = styled.div`
    width: 10%;
    background-color: ${(props) => props.backgroundColor};
    border-radius: ${(props) => (props.iconPosition === 'right' ? '0 8px 8px 0' : '8px 0 0 8px')};
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%;
    padding: 8px 12px;
    cursor: pointer;
    color: #73748F;
`;