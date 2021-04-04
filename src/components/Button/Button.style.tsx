import styled, { css } from 'styled-components';
import { Variant, variables } from 'components/Styles/assets';

export const getVariantStyles = (variant: Variant) => {
  if (!variant) return css``;
  const variantVar = variant.split('-')[0];
  if (variant === 'light') {
    return css`
        color:  ${variables.textPrimary};
        border-color:  ${variables[variantVar]};
    `;
  }
  if (variant === 'light-outline') {
    return css`
        color:  ${variables.textPrimary};
        border-color:  ${variables[variantVar]};
    `;
  }
  if (variant === 'light-text') {
    return css`
        color:  ${variables.textSecondary};
        border-color:  transparent;
        box-shadow: none;
    `;
  }

  if (variant.endsWith('outline')) {
    return css`
        color:  ${variables[variantVar]};
        border-color:  ${variables[variantVar]};
        box-shadow: none;

        &:hover{
            box-shadow: none;
        }
    `;
  }
  if (variant.endsWith('text')) {
    return css`
        color:  ${variables[variantVar]};
        border-color:  transparent;
        box-shadow: none;
    `;
  }
  return css`
        color: #ffffff;
        background-color: ${variables[variantVar]};
        border-color: ${variables[variantVar]};
    `;
};

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
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 
        0px 1px 1px 0px rgb(0 0 0 / 14%), 
        0px 1px 3px 0px rgb(0 0 0 / 12%);
    text-transform: capitalize;
    ${(props) => props.variant && getVariantStyles(props.variant)};

    .dre-button-name{
        visibility: ${(props) => (props.isLoading ? 'hidden' : 'visible')};
    }
    .dre-button-icon{
        width: 18px;
        height: 18px;
        margin-right: 0.5em;
    }
    .dre-loading-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover{
        filter: brightness(90%);
        box-shadow: ${(props) => (props.variant.endsWith('text') ? 'none' : `0px 2px 3px -1px rgb(0 0 0 / 20%), 
        0px 3px 4px 0px rgb(0 0 0 / 14%), 
        0px 1px 7px 0px rgb(0 0 0 / 12%)`)};
         
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
        ${(props) => (props.variant && props.variant.startsWith('light')) && css`color: ${variables.textSecondary}`}
    }
`;

export const ButtonGroupContainer = styled.div`
    display: flex;
    justify-content: ${(props) => {
    let result = 'flex-start';
    if (props.align === 'center') result = 'center';
    else if (props.align === 'right') result = 'flex-end';
    return result;
  }};
    align-items: center;

    &>button:not(:first-child){
        margin-left: ${(props) => props.gap}
    }
`;
