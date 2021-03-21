import * as React from 'react';
import { Icon } from '..';

interface IIconCardProps {
    name: string;
}

const IconCard: React.FunctionComponent<IIconCardProps> = ({
  name
}) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }}
  >
    <Icon name={name} />
    <div style={{
      marginTop: '1em',
      color: 'grey',
      fontFamily: 'sans-serif'
    }}
    >
      {name}
    </div>
  </div>
);

export default IconCard;
