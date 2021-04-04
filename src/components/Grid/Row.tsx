import React from 'react';
import { RowWrapper } from './Style';

export type Size = number | string

export interface Breakpoints {
  xs: Size;
  sm: Size;
  md: Size;
  lg: Size;
  xl: Size;
}

export interface IProps {
  children: React.ReactChildren,
  gutter: number | Breakpoints | number[] | Breakpoints[];
  style?: Record<string, any>,
  center?: boolean,
  wrap?: boolean,
  spaceBetween?: boolean,
}

const Row: React.FC<IProps> = ({
  children,
  gutter,
  style = {},
  center = false,
  spaceBetween = false,
  wrap = false,
}) => {
  const props = {
    style,
    gutter,
    center,
    spaceBetween,
    wrapped: wrap,
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <RowWrapper {...props}>{children}</RowWrapper>;
};

export default Row;
