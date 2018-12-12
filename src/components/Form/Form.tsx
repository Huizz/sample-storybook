import * as React from 'react';
import * as _ from 'lodash';

import Input from 'components/Input';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

interface IFormState {
  formConstraints: Object;
  formErrors: Array<Object>;
  formSubmitted: boolean;
}

interface IFormProps {
  children?: any
}

class Form extends React.Component<IFormProps, IFormState> {
  state = {
    formConstraints: {},
    formErrors: [],
    formSubmitted: false
  }

  render = () => {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h4>This is a form</h4>
        <Input componentId='form--input-1' type='string' title='Input show error on type' onTextChange={this.onInputChange} name='input--name' subtitle='this is the input subtitle' required showError={this.showError('input--name')} />
        <Input componentId='form--input-2' type='string' title='Input show error on submit' onTextChange={this.onInputChange} name='input--name-2' subtitle='this is the input2 subtitle' required minLength={20} showError={this.showErrorOnSubmit('input--name-2')} />
        <button type='submit'>Submit form</button>
      </form> 
    )
  }

  onInputChange = (e: any, errors: Object) => {
    if(errors) {
      let currentFormErrors: Array<Object> = this.state.formErrors;
      currentFormErrors.push(errors);
      this.setState({ formErrors: currentFormErrors });
    }
  }

  showError = (inputName: string) => {
    // @TODO: handle if error should only show on form submit
    if(this.state.formErrors.length) {
      const foundError = _.find(this.state.formErrors, (error: any) => {
        return error[inputName] != null
      })

      return foundError != null;
    }

    return false;
  }

  showErrorOnSubmit = (inputId: string) => {
    if (!this.state.formSubmitted) {
      return;
    }

    return this.showError(inputId);
  }

  handleFormSubmit = (e: any) => {
    e.preventDefault();
    this.setState({ formSubmitted: true });
  }
}

export default Form;

storiesOf('Form', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => {
    return (
      <>
        <Segment style={{border: '1px solid black'}}>
          <h3>Input</h3>
          <Form />
        </Segment>
      </>
    )
  });