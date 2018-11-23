import * as React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { addDecorator, storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

interface IProps {
    buttonText: string,
    primary?: any,
    secondary?: any,
    basic?: any,
}
const CustomButton: React.SFC<IProps> = (props) => {
    return (
        <Button {...props}>{props.buttonText}</Button>
    )
}

addDecorator(withKnobs);
storiesOf('Form/Button', module)
    .addDecorator(story => <Segment>{story()}</Segment>)
    .addWithJSX('Basic', () => <><CustomButton primary buttonText={text('Label', 'This is a button')}/><CustomButton secondary buttonText={text('Label', 'This is a button')}/></>)