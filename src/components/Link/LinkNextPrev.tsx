import * as React from 'react';
// import Link from 'next/link';

import Icon from 'components/Icon';

import './Link.scss';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';
import PropsTable from 'utils/PropsTable';

const LeftArrow = (props: any) => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
)

const RightArrow = (props: any) => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
)

interface IProps {
  id: string;
  href: string;
  name: string;
  direction: 'next' | 'previous';
}

const directionElement = {
  next: (<span className="link--header-text">Next<Icon color="primary" width={15} height={15} SVG={RightArrow} /></span>),
  previous: (<span className="link--header-text"><Icon color="primary" width={15} height={15} SVG={LeftArrow} />Previous</span>)
}

const LinkNextPrev: React.SFC<IProps> = (props) => (
  // <Link href={props.href} passHref prefetch>
    <a href={props.href} id={`${props.direction}-${props.id}`} className={`no-underline anchor--${props.direction}`}>
      <div className={`link link--${props.direction}`}>
        {directionElement[props.direction]}
        <br/>
        <span className="link--name">{props.name}</span>
      </div>
    </a>
  // </Link>
);

export default LinkNextPrev;

const propTypes = [
  {
    name: 'id',
    type: 'string',
    required: true,
    description: 'Id of the link element'
  },
  {
    name: 'href',
    type: 'string',
    required: true,
    description: 'Link to open'
  },
  {
    name: 'name',
    type: 'string',
    required: true,
    description: 'Text to display as link'
  },
  {
    name: 'direction',
    type: 'next or previous',
    required: true,
    description: 'Determine if the link rendered is a next link or previous link'
  }
]

storiesOf('Link', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Next Previous', () => <>
    <Segment>
      <h3>Next Previous links</h3>
      <PropsTable propTypes={propTypes} />
      <div>
        <h4>Previous link</h4>
        <LinkNextPrev 
          href='/' 
          id='next-link' 
          name='Go to next' 
          direction='next'/>
      </div>
      <div>
        <h4>Next link</h4>
        <LinkNextPrev 
          href='/' 
          name='Go to previous' 
          id='previous-link' 
          direction='previous'/>
      </div>
    </Segment>
  </>)