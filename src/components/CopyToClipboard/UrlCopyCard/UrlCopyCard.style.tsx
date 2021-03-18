import styled from 'styled-components';
import { variables } from 'components/Styles/assets';

export const CardContainer = styled.div.attrs({
  className: 'react-dre-copy-card'
})`
    width: ${(props) => props.widthString}; 
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 0.5rem;
    padding: 0;
`;

export const StyledInput = styled.input.attrs({
  className: 'input-container'
})`
    width: 90%;
    background-color: ${(props) => props.backgroundColor};
    border-radius: ${(props) => (props.iconPosition === 'left' ? '0 0.5rem 0.5rem 0' : '0.5rem 0 0 0.5rem')};
    border: 0;
    padding: 0.4rem 0.65rem;
    margin-right: 1px;
    font-size: 1rem;
    cursor: text;
`;

export const IconContainer = styled.div.attrs({
  className: 'icon-container'
})`
    width: 10%;
    background-color: ${(props) => props.backgroundColor};
    border-radius: ${(props) => (props.iconPosition === 'right' ? '0 0.5rem 0.5rem 0' : '0.5rem 0 0 0.5rem')};
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%;
    padding: 0.4rem 0.65rem;
    cursor: pointer;
    color: ${variables.icon};
`;
