import React, { ReactElement } from 'react';
import { StyledButton } from './Button.style';

interface IButtonProps {
    name: string | React.ReactNode;
}

export default function Button({
  name
}: IButtonProps): ReactElement {
  return (
    <StyledButton>
      {name}
    </StyledButton>
  );
}
