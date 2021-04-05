import React, { memo } from 'react';
import {
  Container,
  Line,
  StyledText
} from './Styles';

interface IProps {
    color?: string;
    width?: string;
    thick?: string;
    text?: string;
    textLeft?: string;
    textStyle?: Record<string, any>;
    textGap?: string;
}

const Divider: React.FC<IProps> = ({
  color = '#e7e7e7',
  width = '100%',
  thick = '2px',
  text = '',
  textLeft = '20%',
  textStyle = {},
  textGap = '1.5em'
}) => {
  const lineProps = {
    color,
    width,
    thick
  };

  if (text) {
    return (
      <Container>
        <Line {...lineProps} textLeft={textLeft} />
        <StyledText style={textStyle} textGap={textGap}>{text}</StyledText>
        <Line {...lineProps} />
      </Container>
    );
  }

  return (
    <Line
      {...lineProps}
    />
  );
};

export default memo(Divider);
