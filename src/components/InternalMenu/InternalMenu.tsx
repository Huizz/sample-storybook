import * as React from 'react';

import { Dropdown, Segment } from 'semantic-ui-react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';


import './InternalMenu.scss';

interface IProps {
  links: IContentItem[];
  activeIndex: number;
};

interface IContentItem {
  name: string,
  path: string,
}

const InternalMenu: React.SFC<IProps> = (props) => (
  <Dropdown text="Content">
    <Dropdown.Menu>
      {/* <Dropdown.Header content="Content"></Dropdown.Header> */}
    {props.links.map((item, index) => (
      <Dropdown.Item key={index} active={props.activeIndex === index} value={item.path}>{item.name}</Dropdown.Item>
    ))}
    </Dropdown.Menu>
  </Dropdown>
)

export default InternalMenu;

const links = [
  {
    name: 'What you need to do',
    path: 'link-1'
  },
  {
    name: 'Report the death',
    path: 'link-2'
  }
];

addDecorator(withKnobs);
storiesOf('Internal Menu', module)
    .addDecorator(story => <Segment>{story()}</Segment>)
    .addWithJSX('Basic', () => <InternalMenu links={links} activeIndex={0}/>)