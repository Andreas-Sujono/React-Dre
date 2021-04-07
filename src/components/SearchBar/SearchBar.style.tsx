import styled, { css } from 'styled-components';
import { variables } from 'components/Styles/assets';

interface ISearchContainerProps {
  isInputExpanded: boolean;
  widthString: string;
  iconWidth: string;
}
export const SearchContainer = styled.div < ISearchContainerProps > `
  width: ${(props) => (props.isInputExpanded ? props.widthString : props.iconWidth)};
  transition: width 0.25s;
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 0;
  position: relative;
`;

type IIconContainerProps = ISearchContainerProps & {
  iconPosition: string;
}
export const IconContainer = styled.div < IIconContainerProps > `
  position: absolute;
  top: 8px;
  ${(props) => (props.iconPosition === 'left' ? css`left: 0;` : css`right: 0;`)}
  cursor: pointer;
  color: ${variables.icon};
  width: ${(props) => props.iconWidth};
  height: auto;
  display: flex;
  justify-content: center;
`;

export const StyledInput = styled.input < IIconContainerProps > `
  width: 100%;
  padding: 8px;
  ${(props) => (props.iconPosition === 'left' ? css`padding-left: 32px;` : css`padding-right: 32px;`)};
  border-radius: 8px;
  border: 1px solid ${variables.border};
  transition: box-shadow .15s ease-in-out;

  &:focus{
    outline: 0;
    border-color: ${variables.textLink};
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`;
