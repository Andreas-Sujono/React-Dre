import React, { ReactElement } from 'react';
import { Variant } from 'components/Styles/assets';
import { ILoadingBarProps } from 'components/LoadingBar/LoadingBar';
import LoadingBar from 'components/LoadingBar';
import { Icon } from 'components/Icon';
import { StyledButton } from './Button.style';

interface Styles {
  buttonStyle?: Record<string, any>;
  textStyle?: Record<string, any>;
  iconStyle?: Record<string, any>;
  hoverStyle?: Record<string, any>;
}

interface IButtonProps {
    name?: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean;
    isLoading?: boolean;
    variant?: Variant | "";
    icon?: string | null | React.ReactNode; // @desc: only from react-dre/Icon type
    styles?: Styles;
    loadingProps?: ILoadingBarProps;
    children?: React.ReactNode;
}

export default function Button({
  name = '',
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  variant = '',
  icon = null,
  styles = {
    buttonStyle: {},
    textStyle: {},
    iconStyle: {},
    hoverStyle: {}
  },
  loadingProps = {},
  children,
}: IButtonProps): ReactElement {
  const defaultLoadingProps = {
    width: '1.2rem',
    color: (
      variant
      && (variant.startsWith('light') || variant.endsWith('outline') || variant.endsWith('text')))
      ? '#4aaffe' : 'white',
    ...loadingProps
  };

  let iconStyle: any = {};
  if (!children && !name) iconStyle.marginRight = 0;
  iconStyle = {
    ...iconStyle,
    ...styles.iconStyle
  };

  return (
    <StyledButton
      style={styles.buttonStyle}
      hoverStyle={styles.hoverStyle}
      disabled={disabled}
      variant={variant}
      type={type}
      isLoading={isLoading}
      onClick={onClick}
      className="dre-btn"
    >
      {isLoading && <span className="dre-loading-container"><LoadingBar {...defaultLoadingProps} /></span>}
      {!!icon && (
      <span className="dre-btn-icon" style={iconStyle}>
        {typeof (icon) === 'string' ? <Icon name={icon} /> : icon}
      </span>
      )}
      <span className="dre-btn-name" style={styles.textStyle}>{children || name}</span>
    </StyledButton>
  );
}
