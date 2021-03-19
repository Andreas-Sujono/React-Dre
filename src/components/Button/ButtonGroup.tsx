import React, { ReactElement } from 'react';
import { ButtonGroupContainer } from './Button.style';

interface IButtonGroupProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  gap?: string;
}

export default function ButtonGroup({
  children,
  align = 'left',
  gap = '1em'
}: IButtonGroupProps): ReactElement {
  return (
    <ButtonGroupContainer align={align} gap={gap}>
      {children}
    </ButtonGroupContainer>
  );
}
