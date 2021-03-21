import React, { ReactElement } from 'react';
import { ButtonGroupContainer } from './Button.style';

interface IButtonGroupProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  gap?: string;
  styles?: Record<string, any>;
}

export default function ButtonGroup({
  children,
  align = 'left',
  gap = '1em',
  styles = {},
}: IButtonGroupProps): ReactElement {
  return (
    <ButtonGroupContainer align={align} gap={gap} styles={styles}>
      {children}
    </ButtonGroupContainer>
  );
}
