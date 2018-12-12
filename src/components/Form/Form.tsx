import * as React from 'react';
import * as _ from 'lodash';

import Input from 'components/Input';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

interface IFormState {
  formConstraints: Object;
  formErrors: Array<Object>;
}

interface IFormProps {
  children?: any
}

class Form extends React.Component<IFormProps, IFormState> {
  state = {
    formConstraints: {},
    formErrors: [],
  }

  render = () => {
    return (
      <form onSubmit={(e: any) => { e.preventDefault(); console.log('e: ', e) }}>
        <h4>This is a form</h4>
        <Input componentId='form--input' type='string' title='name' onTextChange={this.onInputChange} name='input--name' subtitle='this is the input subtitle' required showError={this.showError('form--input')} />
        <Input componentId='form--textarea' type='string' title='name' height={600} onTextChange={this.onInputChange} name='textarea--name' subtitle='this is the textarea subtitle' textarea={true} />
        <button type='subtmit'>Submit form</button>
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

  showError = (inputId: string) => {
    // @TODO: handle if error should only show on form submit
    if(this.state.formErrors.length) {
      const foundError = _.find(this.state.formErrors, (error: any) => {
        return error[inputId] != null
      })

      return foundError != null;
    }

    return false;
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