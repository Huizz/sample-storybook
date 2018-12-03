import * as React from 'react';
// import NextLink from 'next/link';
import Icon from 'components/Icon';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';
import PropsTable from 'utils/PropsTable';

import './Link.scss';

const LinkIcon = (props: any) => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"></path></svg>
)

interface IProps {
  href: string;
  name?: string;
  componentId: string;
  withIcon?: boolean;
  noUnderline?: boolean;
}

const LinkA: React.SFC<IProps> = (props) => (
  // <NextLink href={props.href} passHref prefetch>
    <a className={`link--text ${props.noUnderline? 'no-underline' : '' }`} id={props.componentId} href={props.href} >
      {props.name || props.children}{props.withIcon && <Icon color="primary" width={20} height={20} SVG={LinkIcon}/>}
    </a>
  // </NextLink>
)

export default LinkA;

const propTypes = [
  {
    name: 'href',
    type: 'string',
    required: true,
    description: 'The link to redirect/open'
  },
  {
    name: 'componentId',
    type: 'string',
    required: true,
    description: 'Id of the anchor element'
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Text to display as the link'
  },
  {
    name: 'withIcon',
    type: 'boolean',
    required: false,
    description: 'Indicate if the link icon should be shown'
  },
  {
    name: 'noUnderline',
    type: 'boolean',
    required: false,
    description: 'Indicate if the link should be underlined'
  }
]

storiesOf('Link', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Anchor', () => <>
    <Segment>
      <h3>Anchor links</h3>
      <PropsTable propTypes={propTypes} />
      <div>
        <h4>External link with icon and underline</h4>
        <LinkA href='http://google.com.sg'
        componentId='link--one'
        name='new link'
        withIcon={true}
        noUnderline={false} />
      </div>
      <div>
        <h4>Internal link without icon and underline</h4>
        <LinkA href='/?selectedKind=Basics&selectedStory=Colours&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybook-addon-viewport%2Faddon-panel'
        componentId='link--three'
        name='new link'
        noUnderline={true} />
      </div>
    </Segment>
  </>)