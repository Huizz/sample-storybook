import {
  addDecorator,
  configure
} from '@storybook/react';
import {
  withOptions
} from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withOptions({
    name: 'EOL Style guide',
    addonPanelInRight: true
  })
);

addDecorator(
  withInfo({
    inline: true,
    source: false,
  })
)

// load all files with the format *.stories.js inside stories folder
const req = require.context('../stories', true, /.stories.js$/);
// load all the components from src folder
const reqTs = require.context('../src', true, /.*.(ts|tsx)$/);


const loadStories = () => {
  // load index.js
  require('../stories');
  req.keys().map(req);
  reqTs.keys().map(reqTs);
}

configure(loadStories, module);