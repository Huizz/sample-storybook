import * as React from 'react';
import * as Validator from 'validate.js';

import './Input.scss';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

interface IProps {
  componentId: string;
  title: string;
  name: string;
  type: string;
  onTextChange: (e: any, errors: any) => void;
  placeholder?: string;
  textarea?: boolean;
  height?: number;
  optional?: boolean;
  hideLabel?: boolean;
  subtitle?: string;
  errorMessage?: null | string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  showError?: boolean;
}

interface IState {
  hasError: boolean;
  constraints: Object;
}

class Input extends React.Component <IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { constraints: this.buildConstraints(props), hasError: false };
  }

  render = () => {
    const Element: any = this.props.textarea ? 'textarea' : 'input';
    return (
      <div className="input--group">
        {!this.props.hideLabel && <label htmlFor={this.props.name}>{this.props.title}</label>}
        {this.props.subtitle && <span className="input--group--subtitle">{this.props.subtitle}</span>}
        <Element
          type={this.props.type}
          id={this.props.componentId}
          name={this.props.name}
          placeholder={this.props.placeholder}
          className={`input--group--${this.props.textarea ? 'textarea' : 'input'}`}
          onChange={this.onChange} />
        {this.state.hasError && this.props.showError && <p className="input--group--error">{this.props.errorMessage}</p>}
      </div>
    );
  }

  onChange = (event: any) => {
    let inputValue = {};
    if (event.target.value) {
      inputValue[this.props.name] = event.target.value;
    }
    const errors = Validator.validate(inputValue, this.state.constraints);
    console.log(errors, 'errors');
    this.props.onTextChange(event, errors);
  }

  buildConstraints = (inputProps: IProps) => {
    if (!inputProps.minLength && !inputProps.maxLength && !inputProps.required) {
      return {};
    }

    let constraints = {};
    constraints[inputProps.name] = {};
    let lengthConstraint = {};

    if (inputProps.minLength) {
      lengthConstraint = Validator.extend(lengthConstraint, { minimum: inputProps.minLength });
    }

    if (inputProps.maxLength) {
      lengthConstraint = Validator.extend(lengthConstraint, { minimum: inputProps.minLength });
    }

    constraints[inputProps.name].length = lengthConstraint;

    if (inputProps.required) {
      constraints[inputProps.name].presence = true;
    }

    return constraints;
  }
}

export default Input;

storiesOf('Input', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => {
    return (
      <>
        <Segment style={{border: '1px solid black'}}>
          <h3>Input</h3>
          {/* <form onSubmit={(e: any) => {e.preventDefault(); console.log('e: ', e)}}> */}
            <Input componentId='form--input' type='string' title='name' onTextChange={() => console.log('on text change')} name='input--name' subtitle='this is the input subtitle' required/>
            <Input componentId='form--textarea' type='string' title='name' height={600} onTextChange={() => console.log('on text change')} name='textarea--name' subtitle='this is the textarea subtitle' textarea={true}/>
          {/* <button type='subtmit'>Submit form</button> */}
          {/* </form>  */}
        </Segment>
      </>
    )
  });