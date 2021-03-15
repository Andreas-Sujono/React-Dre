import { addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import './style.css'

addDecorator(addReadme);

configure([
  require.context('../src', true, /\.stories\.(js|ts|tsx|mdx)$/)
], module);
