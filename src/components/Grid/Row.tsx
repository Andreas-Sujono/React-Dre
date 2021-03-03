import React from 'react';
import { RowWrapper } from './Style';

export interface IProps {
  children: React.ReactChildren,
  gapLg?: number,
  gapSm?: number,
  gapMd?: number,
  style?: Record<string, any>,
  center?: boolean,
  wrap?: boolean,
  spaceBetween?: boolean,
}

const Row: React.FC<IProps> = ({
  children,
  gapLg = 0,
  gapSm = gapLg,
  gapMd = gapLg,
  style = {},
  center = false,
  spaceBetween = false,
  wrap = false,
}) => {
  const props = {
    style,
    gapLg,
    gapSm,
    gapMd,
    center,
    spaceBetween,
    wrapped: wrap,
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <RowWrapper {...props}>{children}</RowWrapper>;
};

export default Row;
