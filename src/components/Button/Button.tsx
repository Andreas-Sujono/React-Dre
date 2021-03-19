import React, { ReactElement } from 'react';
import { Variant } from 'components/Styles/assets';
import { ILoadingBarProps } from 'components/LoadingBar/LoadingBar';
import LoadingBar from 'components/LoadingBar';
import { StyledButton } from './Button.style';

interface IButtonProps {
    name: string | React.ReactNode;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean;
    isLoading?: boolean;
    variant?: Variant | null;
    icon?: string; // TODO: only from react-dre/Icon type
    style?: Record<string, any>;
    loadingProps?: ILoadingBarProps;
}

export default function Button({
  name,
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  variant = null,
  style = {},
  loadingProps = {}
}: IButtonProps): ReactElement {
  const defaultLoadingProps = {
    width: '1.2rem',
    color: (
      variant
      && (variant.startsWith('light') || variant.endsWith('outline') || variant.endsWith('text')))
      ? '#4aaffe' : 'white',
    ...loadingProps
  };

  return (
    <StyledButton
      style={style}
      disabled={disabled}
      variant={variant}
      type={type}
      isLoading={isLoading}
      onClick={onClick}
      className="dre-btn"
    >
      {isLoading && <span className="dre-loading-container"><LoadingBar {...defaultLoadingProps} /></span>}
      <span className="dre-button-name">{name}</span>
    </StyledButton>
  );
}
