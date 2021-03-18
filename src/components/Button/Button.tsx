import React, { ReactElement } from 'react';
import LoadingBar from 'components/LoadingBar';
import { ILoadingBarProps } from 'components/LoadingBar/LoadingBar';
import { StyledButton } from './Button.style';

type Variant = 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error' | 'light' | 'dark'

interface IButtonProps {
    name: string | React.ReactNode;
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean;
    isLoading?: boolean;
    variant?: Variant;
    icon?: string; // TODO: only from react-dre/Icon type
    style?: Record<string, any>;
    loadingProps?: ILoadingBarProps;
}

export default function Button({
  name,
  type = 'button',
  disabled = false,
  isLoading = false,
  variant = 'primary',
  style = {},
  loadingProps = {}
}: IButtonProps): ReactElement {
  const defaultLoadingProps = {
    width: '1.2rem',
    color: 'white',
    ...loadingProps
  };

  return (
    <StyledButton
      style={style}
      disabled={disabled}
      variant={variant}
      type={type}
      isLoading={isLoading}
    >
      {isLoading && <span className="dre-loading-container"><LoadingBar {...defaultLoadingProps} /></span>}
      <span className="dre-button-name">{name}</span>
    </StyledButton>
  );
}
