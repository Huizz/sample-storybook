import * as React from 'react';
// import Link from 'next/link';

import Card, {IProps as CardProps} from '../Card/Card';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';
import PropsTable from 'utils/PropsTable';

interface IProps extends CardProps {
  href: string
}

const LinkCard: React.SFC<IProps> = (props) => (
  // <Link href={props.href} passHref prefetch>
    <Card { ...props }/>
  // </Link>
)

export default LinkCard;

const propTypes = [
  {
    name: 'href',
    type: 'string',
    required: true,
    description: 'Link to add to the card. If stated, the card will be generated as an anchor element',
  },
  {
    name: 'componentId',
    type: 'string',
    required: true,
    description: 'Id of the card component'
  }, 
  {
    name: 'title',
    type: 'string',
    required: true,
    description: 'Title text displayed on card',
  },
  {
    name: 'titleColor',
    type: 'primary or black',
    required: true,
    description: 'Colour of the title text',
  },
  {
    name: 'length',
    type: 'fill or fit',
    required: true,
    description: 'Determines if the card should be full width or fit to the content width',
  },
  {
    name: 'description',
    type: 'string',
    required: false,
    description: 'Description text to display in the card',
  }
]

storiesOf('Link', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Card', () => <>
    <Segment>
      <h3>Anchor links</h3>
      <PropsTable propTypes={propTypes} />
      <div>
        <h4>External primary button link</h4>
        <LinkCard href='http://google.com.sg' 
          componentId='card-one' 
          title='Card link title' 
          titleColor='primary' 
          length='fit' 
          description='Card link description'/>
      </div>
      <div>
        <h4>Internal secondary button link</h4>
        <LinkCard href='/?selectedKind=Basics&selectedStory=Colours&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybook-addon-viewport%2Faddon-panel' 
          componentId='card-two' 
          title='Card link title' 
          titleColor='black' 
          length='fill' 
          description='Card link description'/>
      </div>
    </Segment>
  </>)