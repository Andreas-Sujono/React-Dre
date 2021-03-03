import React from 'react';
import { ColumnWrapper } from './Style';

export interface IProps {
  lg: number,
  height: string,
  children: React.ReactChildren,
  sm?: number,
  md?: number,
  xl?: number,
  style?: Record<string, any>,
  minWidth?: string | number,
}

const Column: React.FC<IProps> = ({
  lg,
  height,
  children,
  sm = lg,
  md = lg,
  xl = lg,
  style = {},
  minWidth = '100%'
}) => {
  const props = {
    style, sm, md, lg, xl, height, minWidth
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ColumnWrapper {...props}>
      <div className="grid-gap">{children}</div>
    </ColumnWrapper>
  );
};

export default Column;
