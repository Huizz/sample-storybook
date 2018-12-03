import * as React from 'react';
import { Segment } from 'semantic-ui-react';

import './Card.scss';
import PropsTable from 'utils/PropsTable';

import { storiesOf } from '@storybook/react';

export interface IProps {
  componentId: string;
  title: string;
  titleColor: 'primary' | 'black';
  description?: string;
  length: 'fill' | 'fit';
  href?: string;
}

const Card: React.SFC<IProps> = (props) => {
  const CardElement = props.href ? 'a' : 'div';
  return (
    <CardElement id={props.componentId} className={`card ${props.length}`} href={props.href}>
      <span className={`card--title card--title--${props.titleColor}`}>{props.title}</span>
      {props.description && <p className="card--description">{props.description}</p>}
    </CardElement>
  );
};

export default Card;

const propTypes = [
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
  },
  {
    name: 'href',
    type: 'string',
    required: false,
    description: 'Link to add to the card. If stated, the card will be generated as an anchor element',
  }
]

storiesOf('Card', module)
  .addDecorator(story => <Segment><PropsTable propTypes={propTypes}/> {story()} </Segment>)
  .addWithJSX('Basic', () => <>
    <Segment>
      <h3>Card</h3>
      <h4>Card with primary text and fill length</h4>
      <Card componentId='card--id' 
            title='This is a card' 
            titleColor='primary' 
            description='Desription of this card'
            length='fill'
            href='/'/>
      <h4>Card with primary text and fit length</h4>
      <Card componentId='card--two' 
            title='This is a card' 
            titleColor='primary' 
            description='Desription of this card'
            length='fit'
            href='/'/>
      <h4>Card with black title text and no link</h4>
      <Card componentId='card--three' 
            title='This is a card' 
            titleColor='black' 
            description='Desription of this card'
            length='fit' />
      </Segment>
  </>)