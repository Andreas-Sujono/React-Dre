import React, { ReactElement } from 'react';
import { ButtonGroupContainer } from './Button.style';

interface IButtonGroupProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  gap?: string;
  style?: Record<string, any>;
}

export default function ButtonGroup({
  children,
  align = 'left',
  gap = '1em',
  style = {},
}: IButtonGroupProps): ReactElement {
  return (
    <ButtonGroupContainer align={align} gap={gap} style={style} className="dre-btn-group">
      {children}
    </ButtonGroupContainer>
  );
}
