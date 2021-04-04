import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { IProps as IRowProps } from './Row';
import { IProps as IColumnProps } from './Column';

// TODO: how to make this customizable to the user
export const media = generateMedia({
  huge: '1440px',
  large: '1270px',
  medium: '908px',
  small: '550px',
});

export const RowWrapper = styled.div < IRowProps > `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props: IRowProps) => {
    let value = 'none';
    if (props?.style?.justifyContent) value = props.style.justifyContent;
    if (props?.center) value = 'center';
    if (props?.spaceBetween) value = 'space-between';
    return value;
  }};
  align-items: ${(props: IRowProps) => {
    let value = 'none';
    if (props?.style?.alignItems) value = props.style.alignItems;
    if (props?.center) value = 'center';
    if (props?.spaceBetween) value = 'center';
    return value;
  }};
  flex-wrap: ${(props: {wrapped?: boolean}) => (props?.wrapped ? 'wrap' : 'nowrap')};
`;

// const maxGrid = 12;
export const ColumnWrapper = styled.div < IColumnProps > `
`;

// & > div div.grid-gap {
//   padding-top: ${(props: IRowProps) => (props?.gapLg ? props?.gapLg / 2 : 0)}px;
//   padding-bottom: ${(props: IRowProps) => (props?.gapLg ? props?.gapLg / 2 : 0)}px;
//   padding-left: ${(props: IRowProps) => (props?.gapLg ? props?.gapLg / 2 : 0)}px;
//   padding-right: ${(props: IRowProps) => (props?.gapLg ? props?.gapLg / 2 : 0)}px;
// }
// & > div:first-child div.grid-gap {
//   padding-left: 0;
// }
// & > div:last-child div.grid-gap {
//   padding-right: 0;
// }

// ${media.lessThan('small')`
//   & > div div.grid-gap {
//     padding-top: ${(props: IRowProps) => (props?.gapSm ? props?.gapSm / 2 : 0)}px;
//     padding-bottom: ${(props: IRowProps) => (props?.gapSm ? props?.gapSm / 2 : 0)}px;
//     padding-left: ${(props: IRowProps) => (props?.gapSm ? props?.gapSm / 2 : 0)}px;
//     padding-right: ${(props: IRowProps) => (props?.gapSm ? props?.gapSm / 2 : 0)}px;
//   }
// `}

// ${media.between('medium', 'large')`
//   & > div div.grid-gap {
//     padding-top: ${(props: IRowProps) => (props?.gapMd ? props?.gapMd / 2 : 0)}px;
//     padding-bottom: ${(props: IRowProps) => (props?.gapMd ? props?.gapMd / 2 : 0)}px;
//     padding-left: ${(props: IRowProps) => (props?.gapMd ? props?.gapMd / 2 : 0)}px;
//     padding-right: ${(props: IRowProps) => (props?.gapMd ? props?.gapMd / 2 : 0)}px;
//   }
// `}

// min-width: ${(props: IColumnProps) => {
//   if (!props.minWidth) return 'auto';
//   if (typeof props.minWidth === 'string') return props.minWidth;
//   if (typeof props.minWidth === 'number') return `${props.minWidth}px`;
//   return 'auto';
// }};
// width: ${(props: IColumnProps) => `calc(100% * ${props.lg} / ${maxGrid} )`};
// height: ${(props: IColumnProps) => props.height || '100%'};

// ${media.lessThan('small')`
//   width: ${(props: IColumnProps) =>
//   `calc(100% * ${props.sm || props.lg} / ${maxGrid} )` || 'inherit'};
// `}

// ${media.between('medium', 'large')`
//   width: ${(props: IColumnProps) =>
//   `calc(100% * ${props.md || props.lg} / ${maxGrid} )` || 'inherit'};
// `}

// & > div.grid-gap{width: 100%; height: 100%;}
