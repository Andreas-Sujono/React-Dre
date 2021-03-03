import React from 'react';
import ReactLoading from 'react-loading';
import { LoadingContainer, LoadingFullPageContainer } from './Style';

// Loading type from react-loading library
type LoadingType =
  | "blank"
  | "balls"
  | "bars"
  | "bubbles"
  | "cubes"
  | "cylon"
  | "spin"
  | "spinningBubbles"
  | "spokes";

interface IProps {
  color: string;
  type: LoadingType;
  width: string;
  height: string;
  containerStyle?: object;
}
const LoadingBar: React.FC<IProps> = ({
  color,
  type,
  width,
  height,
  containerStyle = {}
}) => (
  <LoadingContainer style={containerStyle}>
    <ReactLoading type={type} color={color} height={height} width={width} />
  </LoadingContainer>
);

const FullPageLoadingBar: React.FC<IProps> = ({
  color,
  type,
  width,
  height,
  containerStyle = {}
}) => (
  <LoadingFullPageContainer style={containerStyle}>
    <ReactLoading type={type} color={color} height={height} width={width} />
  </LoadingFullPageContainer>
);

export default LoadingBar;
export { FullPageLoadingBar };
