import React, { ReactElement } from 'react';
import * as IconName from './IconLibrary';

interface IIconProps {
    iconName: string;
}

export default function Icon({
  iconName
}: IIconProps): ReactElement {
  const IconComponent = IconName[iconName];
  return (
    <IconComponent />
  );
}
