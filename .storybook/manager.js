import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

export const theme = create({
    base: 'light',
    brandTitle: 'React Dre',
    brandUrl: 'https://github.com/Andreas-Sujono/React-Dre',
    brandImage: '/assets/logo-with-name.png',
    // fontBase: 'Lato',
    // colorPrimary: '#13153c',
    // colorSecondary: '#555670',
  });

addons.setConfig({
  theme,
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
});