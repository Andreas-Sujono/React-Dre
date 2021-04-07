import React from 'react';
import { Breakpoints } from './Row';
import { ColumnWrapper } from './Style';

export interface IProps {
  span: number | Breakpoints;
  children: React.ReactElement,
  flex?: string;
  style?: Record<string, any>,
}

const Column: React.FC<IProps> = ({
  span,
  flex = 'auto',
  children,
  style = {},
}) => {
  const props = {
    span, flex, style
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ColumnWrapper {...props}>
      <div className="dre-grid-gap">{children}</div>
    </ColumnWrapper>
  );
};

export default Column;
