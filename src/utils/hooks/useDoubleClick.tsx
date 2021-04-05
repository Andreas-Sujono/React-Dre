import { useEffect } from 'react';

interface IProps {
    ref: any;
    latency?: number;
    onSingleClick?: (e: any) => void;
    onDoubleClick?: (e: any) => void;
}

const useDoubleClick = ({
  ref,
  latency = 300,
  onSingleClick = () => null,
  onDoubleClick = () => null,
}: IProps) => {
  useEffect(() => {
    const clickRef = ref.current;
    let handleClick: null | ((e: any) => void) = null;

    if (clickRef) {
      let clickCount = 0;
      handleClick = (e) => {
        clickCount += 1;

        setTimeout(() => {
          if (clickCount === 1) onSingleClick(e);
          else if (clickCount === 2) onDoubleClick(e);

          clickCount = 0;
        }, latency);
      };

      // Add event listener for click events
      clickRef.addEventListener('click', handleClick);
    }

    // Remove event listener
    return () => {
      if (clickRef) clickRef.removeEventListener('click', handleClick);
    };
  }, [ref.current]);
};

export default useDoubleClick;
