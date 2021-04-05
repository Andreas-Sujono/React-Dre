import React, { ReactElement } from 'react';
import { upperFirst } from 'utils/lodash';
import * as IconName from './IconLibrary';

interface IIconProps {
  name: string;
}

export default function Icon({
  name
}: IIconProps): ReactElement {
  const additionalString = name.endsWith('Icon') ? '' : 'Icon';
  const nameParsed = `${upperFirst(name)}${additionalString}`;
  const IconComponent = IconName[nameParsed];

  if (!IconComponent) return <span>Not Found</span>;
  return (
    <IconComponent />
  );
}
