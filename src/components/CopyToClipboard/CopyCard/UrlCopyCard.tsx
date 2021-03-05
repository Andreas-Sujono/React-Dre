import React from 'react';
import { SimpleCopyIcon } from 'components/Icon';
import copy from '..';
import { CardContainer, InputContainer, IconContainer } from './Style';

interface Styles {
  ContainerStyle: Record<string, any>;
  inputStyle: Record<string, any>;
  iconStyle: Record<string, any>;
}

interface IProps {
  url: string;
  width: string | number;
  onAfterCopy?: () => void;
  backgroundColor?: string;
  copyBackgroundColor?: string;
  styles?: Styles;
  customIcon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'none';
}

const UrlCopyCard: React.FC<IProps> = ({
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
  customIcon = <SimpleCopyIcon />,
  iconPosition = 'right',
}) => {
  const widthString: string = typeof (width) === 'number' ? `${width}px` : width;

  const handleCopy = () => {
    copy(url);
    onAfterCopy();
  };

  const renderIcon = () => (
    <IconContainer
      style={styles.iconStyle}
      backgroundColor={copyBackgroundColor}
      onClick={handleCopy}
      iconPosition={iconPosition}
    >
      {customIcon}
    </IconContainer>
  );

  return (
    <CardContainer style={styles.ContainerStyle} backgroundColor={backgroundColor} widthString={widthString}>
      {iconPosition === 'left' && renderIcon()}
      <InputContainer
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

export default UrlCopyCard;
