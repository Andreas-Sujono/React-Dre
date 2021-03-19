import React from 'react';

interface ITableProps {
}

const Table: React.FunctionComponent<ITableProps> = () => {
  const x = 'test';
  return (
    <table>
      {x}
    </table>
  );
};

export default Table;
