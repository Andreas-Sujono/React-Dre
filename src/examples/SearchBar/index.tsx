import React, { useState } from 'react';
import SearchBar from 'components/SearchBar';

const Default = () => {
  const [value, setValue] = useState<string>('');

  return (
    <SearchBar
      value={value}
      onChange={(_value: string) => setValue(_value)}
      width="200px"
      iconPosition="right"
      isExpand={false}
      clickOutsideToCollapse
    />
  );
};

export default Default;
