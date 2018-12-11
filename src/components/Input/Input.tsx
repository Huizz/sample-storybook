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
  width: number;
  placeholder?: string;
}

const Input: React.SFC<IProps> = (props) => {
  return (
    <div className="input--group">
      {!props.hideLabel && <label htmlFor={props.name}>{props.title}</label>}
      {props.subtitle && <span className="input--group--subtitle">{props.subtitle}</span>}
      <input
        id={props.componentId}
        name={props.name}
        placeholder={props.placeholder}
        className={`input--group--input`}
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
          <Input componentId='form--input' title='name' width={500} onTextChange={() => console.log('on text change')} name='input--name' subtitle='this is the input subtitle'/>
        </Segment>
      </>
    )
  });