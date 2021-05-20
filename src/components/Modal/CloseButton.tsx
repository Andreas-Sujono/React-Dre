import * as React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { getSizeString } from '../../utils';

interface IButtonWrapperProps { top: string; right: string; }

const ButtonWrapper = styled.div < IButtonWrapperProps > `
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
`;

const StyledButton = styled(Button)`
padding: '0.5em';
border-radius: '50%';

&:hover{
    background: grey;
}
`;

interface ICloseButtonProps {
    top?: string | number;
    right?: string | number;
    onClick: () => void;
}

const CloseButton: React.FunctionComponent<ICloseButtonProps> = ({
  top = '0.6em',
  right = '1em',
  onClick
}) => (
  <ButtonWrapper top={getSizeString(top)} right={getSizeString(right)}>
    <StyledButton
      icon="close"
      onClick={onClick}
      variant="light-text"
      styles={{
        buttonStyle: {
          padding: '0.5em',
          borderRadius: '50%',
        },
        hoverStyle: {
          background: '#F5F5F5'
        },
        iconStyle: {
          fontSize: '1.2em',
          fontWeight: 'bold'
        }
      }}
    />
  </ButtonWrapper>
);

export default CloseButton;
