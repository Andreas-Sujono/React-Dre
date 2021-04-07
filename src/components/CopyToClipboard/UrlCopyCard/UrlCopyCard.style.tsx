import styled from 'styled-components';
import { variables } from 'components/Styles/assets';

interface ICardContainer {
  backgroundColor: string;
  widthString: string;
}
export const CardContainer = styled.div < ICardContainer > `
    width: ${(props) => props.widthString}; 
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 0.5rem;
    padding: 0;
`;

interface IStyledInput {
  backgroundColor: string;
  iconPosition: 'left' | 'right' | 'none';
}
export const StyledInput = styled.input < IStyledInput > `
    width: 90%;
    background-color: ${(props: any) => props.backgroundColor};
    border-radius: ${(props: any) => (props.iconPosition === 'left' ? '0 0.5rem 0.5rem 0' : '0.5rem 0 0 0.5rem')};
    border: 0;
    padding: 0.4rem 0.65rem;
    margin-right: 1px;
    font-size: 1rem;
    cursor: text;
`;

export const IconContainer = styled.div < IStyledInput > `
    width: 10%;
    background-color: ${(props: any) => props.backgroundColor};
    border-radius: ${(props: any) => (props.iconPosition === 'right' ? '0 0.5rem 0.5rem 0' : '0.5rem 0 0 0.5rem')};
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%;
    padding: 0.4rem 0.65rem;
    cursor: pointer;
    color: ${variables.icon};
`;
