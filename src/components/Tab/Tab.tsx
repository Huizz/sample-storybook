import * as React from 'react';
import { Tab as SemanticTab } from 'semantic-ui-react';

import './Tab.scss';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

interface ITabItem {
  name: string;
  content: React.ReactNode;
}
interface IProps {
  tabs: ITabItem[]
}

const generatePanes = (tabs: ITabItem[]) => {
  return tabs.map((tab) => {
     return {
       menuItem: tab.name,
       render: () => {
         return tab.content;
       }
     }
  });
}

const Tab: React.SFC<IProps> = (props) => (
  <SemanticTab className='eol-tab' panes={generatePanes(props.tabs)} />
)

export default Tab;

const tabs = [
  {
    name: 'My plans',
    content: <div>My plans content</div>
  },
  {
    name: 'Shared with me',
    content: <div>Shared with me content</div>
  }
]

storiesOf('Tab', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => {
    return (
      <>
        <Segment style={{border: '1px solid black'}}>
          <h3>Tab</h3>
          <span>*Only on mobile view*</span>
          <Tab tabs={tabs}/>
        </Segment>
      </>
    )
  });