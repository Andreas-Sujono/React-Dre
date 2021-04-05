import React from 'react';
import ClickOutsidehandler from 'components/ClickOutsideHandler';

const ClickOutsidehandlerExample = () => (
  // eslint-disable-next-line no-console
  <ClickOutsidehandler onOutsideClick={() => console.log('outside click')}>
    <div>click outside this text</div>
  </ClickOutsidehandler>
);

export default ClickOutsidehandlerExample;
export {
  ClickOutsidehandlerExample
};
