import { useState, useEffect, useRef } from 'react';

// TODO: fix any
// example usage: const [value, callback] = useStateCallback('initialValue')
function useStateCallback(initialState: any) {
  const [state, setState] = useState<typeof initialState>(initialState);
  const cbRef = useRef<any>(null); // mutable ref to store current callback

  const setStateCallback = (_state, cb) => {
    cbRef.current = cb; // store passed callback to ref
    setState(_state);
  };

  useEffect(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}

export default useStateCallback;
