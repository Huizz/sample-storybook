import * as React from 'react';
// import Link from 'next/link';
import Button, {IProps as ButtonProps} from '../Button/Button';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';
import PropsTable from 'utils/PropsTable';

interface IProps extends ButtonProps {
  href: string
}

const LinkButton: React.SFC<IProps> = (props) => (
  // <Link href={props.href} passHref prefetch>
    <Button { ...props }/>
  // </Link>
)

export default LinkButton;

const propTypes = [
  {
    name: 'href',
    type: 'string',
    required: true,
    description: 'The link to open'
  },
  {
    name: 'name',
    type: 'string',
    required: true,
    description: 'The text that is displayed on the button'
  },
  {
    name: 'secondaryText',
    type: 'string',
    required: false,
    description: 'The small line of text to display under the name'
  },
  {
    name: 'type',
    type: 'string',
    required: true,
    description: 'The type of button. One of primary or ghost'
  }
]

storiesOf('Link', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Button', () => <>
    <Segment>
      <h3>Anchor links</h3>
      <PropsTable propTypes={propTypes} />
      <div>
        <h4>External primary button link</h4>
        <LinkButton href='http://google.com.sg' name='Button link to Google' type='primary' length='fit'/>
      </div>
      <div>
        <h4>Internal secondary button link</h4>
        <LinkButton href='/?selectedKind=Basics&selectedStory=Colours&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybook-addon-viewport%2Faddon-panel' 
        name='Button link to front page' type='secondary' length='fit'/>
      </div>
    </Segment>
  </>)