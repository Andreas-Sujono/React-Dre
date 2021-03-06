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

interface Styles {
  containerStyle?: Record<string, any>;
}

interface ILoadingBarProps {
  width: string;
  color?: string;
  type?: LoadingType;
  styles?: Styles;
}
const LoadingBar: React.FC<ILoadingBarProps> = ({
  width,
  color = '#4aaffe',
  type = 'spin',
  styles = {
    containerStyle: {}
  }
}) => (
  <LoadingContainer style={styles.containerStyle}>
    <ReactLoading type={type} color={color} width={width} height={width} />
  </LoadingContainer>
);

interface IFullPageLoadingBarProps extends ILoadingBarProps{
  backgroundColor: string;
}

const FullPageLoadingBar: React.FC<IFullPageLoadingBarProps> = ({
  width,
  backgroundColor,
  color = '#4aaffe',
  type = 'spin',
  styles = {
    containerStyle: {}
  }
}) => (
  <LoadingFullPageContainer style={styles.containerStyle} backgroundColor={backgroundColor}>
    <ReactLoading type={type} color={color} width={width} height={width} />
  </LoadingFullPageContainer>
);

export default LoadingBar;
export { FullPageLoadingBar };
