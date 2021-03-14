import React from 'react';
import { addEventListener } from 'consolidated-events';
import objectValues from 'object.values';
import contains from 'document.contains';

/**
 * CLONE: airbnb/react-outside-click-handler
 * https://github.com/airbnb/react-outside-click-handler
 */
const DISPLAY = {
  BLOCK: 'block',
  FLEX: 'flex',
  INLINE: 'inline',
  INLINE_BLOCK: 'inline-block',
  CONTENTS: 'contents',
};

interface IProps {
  onOutsideClick: (e: any) => void;
  disabled?: boolean;
  useCapture?: boolean;
  display?: "block" | "flex" | "inline" | "inline-block" | "contents";
}

class ClickOutsideHandler extends React.PureComponent<IProps> {
    // eslint-disable-next-line react/static-property-placement
    static defaultProps = {
      disabled: false,

      // `useCapture` is set to true by default so that a `stopPropagation` in the
      // children will not prevent all outside click handlers from firing - maja
      useCapture: true,
      display: DISPLAY.BLOCK,
    }

    childNode: any;

    removeMouseUp: any;

    removeMouseDown: any;

    constructor(props: IProps) {
      super(props);

      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
      this.setChildNodeRef = this.setChildNodeRef.bind(this);
    }

    componentDidMount() {
      const { disabled, useCapture } = this.props;

      if (!disabled) this.addMouseDownEventListener(useCapture);
    }

    componentDidUpdate({ disabled: prevDisabled }: IProps) {
      const { disabled, useCapture } = this.props;
      if (prevDisabled !== disabled) {
        if (disabled) {
          this.removeEventListeners();
        } else {
          this.addMouseDownEventListener(useCapture);
        }
      }
    }

    componentWillUnmount() {
      this.removeEventListeners();
    }

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.
    onMouseDown(e) {
      const { useCapture } = this.props;

      const isDescendantOfRoot = this.childNode && contains(this.childNode, e.target);
      if (!isDescendantOfRoot) {
        if (this.removeMouseUp) {
          this.removeMouseUp();
          this.removeMouseUp = null;
        }
        this.removeMouseUp = addEventListener(
          document,
          'mouseup',
          this.onMouseUp,
          { capture: useCapture },
        );
      }
    }

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.
    onMouseUp(e) {
      const { onOutsideClick } = this.props;

      const isDescendantOfRoot = this.childNode && contains(this.childNode, e.target);
      if (this.removeMouseUp) {
        this.removeMouseUp();
        this.removeMouseUp = null;
      }

      if (!isDescendantOfRoot) {
        onOutsideClick(e);
      }
    }

    setChildNodeRef(ref) {
      this.childNode = ref;
    }

    addMouseDownEventListener(useCapture) {
      this.removeMouseDown = addEventListener(
        document,
        'mousedown',
        this.onMouseDown,
        { capture: useCapture },
      );
    }

    removeEventListeners() {
      if (this.removeMouseDown) this.removeMouseDown();
      if (this.removeMouseUp) this.removeMouseUp();
    }

    render() {
      const { children, display } = this.props;

      return (
        <div
          ref={this.setChildNodeRef}
          style={
            display !== DISPLAY.BLOCK && objectValues(DISPLAY).includes(display)
              ? { display }
              : undefined
          }
        >
          {children}
        </div>
      );
    }
}

export default ClickOutsideHandler;
