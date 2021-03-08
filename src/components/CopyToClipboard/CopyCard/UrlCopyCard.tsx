import React, { memo, useCallback } from 'react';
import { SimpleCopyIcon } from 'components/Icon';
import copy from '..';
import { CardContainer, StyledInput, IconContainer } from './UrlCopyCard.style';

interface Styles {
  ContainerStyle?: Record<string, any>;
  inputStyle?: Record<string, any>;
  iconStyle?: Record<string, any>;
}

interface IUrlCopyCardProps {
  url: string;
  width: string | number;
  onAfterCopy?: () => void;
  backgroundColor?: string;
  copyBackgroundColor?: string;
  styles?: Styles;
  copyIcon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'none';
}

const UrlCopyCard: React.FC<IUrlCopyCardProps> = ({
  url,
  width,
  onAfterCopy = () => null,
  backgroundColor = '#F5F5FA',
  copyBackgroundColor = '#ECECF3',
  styles = {
    ContainerStyle: {},
    inputStyle: {},
    iconStyle: {}
  },
  copyIcon = <SimpleCopyIcon />,
  iconPosition = 'right',
}) => {
  const widthString: string = typeof (width) === 'number' ? `${width}px` : width;

  const handleCopy = useCallback(() => {
    copy(url);
    onAfterCopy();
  }, [url, onAfterCopy]);

  const renderIcon = useCallback(() => (
    <IconContainer
      style={styles.iconStyle}
      backgroundColor={copyBackgroundColor}
      onClick={handleCopy}
      iconPosition={iconPosition}
    >
      {copyIcon}
    </IconContainer>
  ), [styles.iconStyle, copyBackgroundColor, handleCopy, iconPosition, copyIcon]);

  return (
    <CardContainer style={styles.ContainerStyle} backgroundColor={backgroundColor} widthString={widthString}>
      {iconPosition === 'left' && renderIcon()}
      <StyledInput
        value={url}
        backgroundColor={backgroundColor}
        style={styles.inputStyle}
        iconPosition={iconPosition}
        disabled
      />
      {iconPosition === 'right' && renderIcon()}
    </CardContainer>
  );
};

export default memo(UrlCopyCard);
