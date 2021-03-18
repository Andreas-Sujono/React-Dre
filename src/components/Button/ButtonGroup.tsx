import React, { ReactElement } from 'react';
import { ButtonGroupContainer } from './Button.style';

interface IButtonGroupProps {
    children: React.ReactNode;
}

export default function Button({
  children
}: IButtonGroupProps): ReactElement {
  return (
    <ButtonGroupContainer>
      {children}
    </ButtonGroupContainer>
  );
}
