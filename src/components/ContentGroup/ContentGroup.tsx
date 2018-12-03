import * as React from 'react';
import { Segment } from 'semantic-ui-react';

import './ContentGroup.scss';
import PropsTable from 'utils/PropsTable';

import { storiesOf } from '@storybook/react';

interface IProps {
  title: string;
  subtitle: string;
  image?: string;
  size: 'small' | 'large'
}

const IndexContentGroup: React.SFC<IProps> = (props) => (
  <div className={`content-group ${props.size}`}>
    <div className="content-group--logo"></div>
    <div className="content-group--text">
      <p className="content-group--title">{props.title}</p>
      <p className="content-group--subtitle">{props.subtitle}</p>
   </div>
  </div>
);

export default IndexContentGroup;

const propTypes = [
  {
    name: 'title',
    type: 'string',
    required: true,
    description: 'Title to display in the content group'
  },
  {
    name: 'subtitle',
    type: 'string',
    required: true,
    description: 'Subtitle to display in the content group'
  },
  {
    name: 'size',
    type: 'small or large',
    required: true,
    description: 'Size of the content group. Large typically occupies the entire width of the visible content'
  },
  {
    name: 'image',
    type: 'string',
    required: false,
    description: 'Image to be displayed in the content group. Work in progress'
  }
]

storiesOf('Content Group', module)
  .addDecorator(story => <Segment><PropsTable propTypes={propTypes}/> {story()} </Segment>)
  .addWithJSX('Basic', () => <>
    <Segment>
      <h3>Content Group</h3>
      <h4>Content Group with large size</h4>
      <IndexContentGroup title='This is the title'
        subtitle='this is the subtitle'
        size='large' />
      <h4>Content Group with small size</h4>
      <IndexContentGroup title='This is the title'
        subtitle='this is the subtitle'
        size='small' />
      </Segment>
  </>)