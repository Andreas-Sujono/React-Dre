import styled, { css } from 'styled-components';
import { colors } from 'components/Styles/assets';

const { input } = colors;

export const SearchContainer = styled.div.attrs({
  className: 'react-dre-search-bar'
})`
  width: ${(props) => (props.isInputExpanded ? props.widthString : props.iconWidth)};
  transition: width 0.4s;
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 0;
  position: relative;
`;

export const IconContainer = styled.div.attrs({
  className: 'icon-container'
})`
  position: absolute;
  top: 8px;
  ${(props) => (props.iconPosition === 'left' ? css`left: 0;` : css`right: 0;`)}
  cursor: pointer;
  color: ${colors.text.icon};
  width: ${(props) => props.iconWidth};
  height: auto;
  display: flex;
  justify-content: center;
`;

export const StyledInput = styled.input.attrs({
  className: 'search-input'
})`
  width: 100%;
  padding: 8px;
  ${(props) => (props.iconPosition === 'left' ? css`padding-left: 32px;` : css`padding-right: 32px;`)};
  border-radius: 8px;
  border: 1px solid ${input.borderColor};
  transition: box-shadow .15s ease-in-out;

  &:focus{
    outline: 0;
    border-color: ${input.focusedBorderColor};
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`;
