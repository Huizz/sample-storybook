import * as React from 'react';
import { Input, Segment } from 'semantic-ui-react';
import { addDecorator, storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

interface IProps {
  className: string,
  disabled?: boolean,
  error?: boolean,
  label?: string,
  name: string,
  type: string,
  placeholder?: string,
  onChange: (data: Object) => void
}

const CustomInput: React.SFC<IProps> = (props) => {
  return (
    <Input
      type={props.type}
      name={props.name}
      disabled={props.disabled}
      error={props.error}
      label={props.label}
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

addDecorator(withKnobs);
storiesOf('Form/Input', module)
    .addDecorator(story => <Segment>{story()}</Segment>)
    .addWithJSX('Basic', () => <CustomInput type={text('Input type', 'text')} 
                                            name={text('Input name', 'text-input')} 
                                            label={text('Input label', 'username')}
                                            disabled={boolean('Input disabled', false)}
                                            className={text('Input class name', 'input__text')}
                                            placeholder={text('Input placeholder', 'Enter your username')}
                                            onChange={onChange}
                                            />)

const onChange = (data: object) => {
  console.log('running onchange: ', data);
}