import * as React from 'react';
import VideoBg from 'reactjs-videobg';

interface IVideoBackgroundProps {
    src: string;
    videoType?: string;
    poster?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    onPlay?: () => void;
    onPlaying?: () => void;
    onEnded?: () => void;
}

const VideoBackground: React.FunctionComponent<IVideoBackgroundProps> = ({
  src,
  videoType = 'video/mp4',
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  onPlay,
  onPlaying,
  onEnded,
}) => {
  const videoBgProps = {
    poster,
    autoPlay,
    loop,
    muted,
    onPlay,
    onPlaying,
    onEnded,
  };
  return (
    <VideoBg {...videoBgProps}>
      <VideoBg.Source src={src} type={videoType} />
    </VideoBg>
  );
};

export default VideoBackground;
