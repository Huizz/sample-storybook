import * as React from 'react';
import { Tab as SemanticTab } from 'semantic-ui-react';

import './Tab.scss';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

const generatePanes = () => {
  return [
    {
      menuItem: 'My plans',
      render: () => (<SemanticTab.Pane attached={false}>My plans content</SemanticTab.Pane>)
    },
    {
      menuItem: 'Shared with me',
      render: () => (<SemanticTab.Pane attached={false}>Shared with me</SemanticTab.Pane>)
    }
  ]
}

const Tab: React.SFC<{}> = () => (
  <SemanticTab className='eol-tab' panes={generatePanes()} />
)

export default Tab;

storiesOf('Experiment', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Tab', () => {
    return (
      <>
        <Segment style={{border: '1px solid black'}}>
          <h3>Tab</h3>
          <Tab />
        </Segment>
      </>
    )
  });