import * as React from 'react';

import './Input.scss';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

interface IProps {
  componentId: string;
  optional?: boolean;
  hideLabel?: boolean;
  title: string;
  name: string;
  subtitle?: string;
  onTextChange: (e: any) => void;
  errorMessage?: null | string;
  placeholder?: string;
  textarea?: boolean;
  height?: number;
}

const Input: React.SFC<IProps> = (props) => {
  const Element: any = props.textarea ? 'textarea' : 'input';

  return (
    <div className="input--group">
      {!props.hideLabel && <label htmlFor={props.name}>{props.title}</label>}
      {props.subtitle && <span className="input--group--subtitle">{props.subtitle}</span>}
      <Element
        id={props.componentId}
        name={props.name}
        placeholder={props.placeholder}
        className={`input--group--${props.textarea ? 'textarea' : 'input'}`}
        onChange={props.onTextChange} />
      {props.errorMessage && <p className="input--group--error">{props.errorMessage}</p>}
    </div>
  );
}


export default Input;

storiesOf('Input', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => {
    return (
      <>
        <Segment style={{border: '1px solid black'}}>
          <h3>Input</h3>
          <Input componentId='form--input' title='name' onTextChange={() => console.log('on text change')} name='input--name' subtitle='this is the input subtitle'/>
          <Input componentId='form--textarea' title='name' height={600} onTextChange={() => console.log('on text change')} name='textarea--name' subtitle='this is the textarea subtitle' textarea={true}/>

        </Segment>
      </>
    )
  });