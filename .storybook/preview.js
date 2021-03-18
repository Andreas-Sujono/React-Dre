import React from 'react';
import { sortStories } from './utils/helpers';
import { theme } from './utils/theme';

const SORT_ORDER = {
  Introduction: [
    'Welcome',
    'Contributing',
  ],
  Components: [],
};
  
export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: sortStories(SORT_ORDER),
  },
  docs: { theme },
};