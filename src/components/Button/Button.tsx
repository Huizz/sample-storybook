import * as React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { addDecorator, storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

interface IProps {
    buttonText: string,
    color: any
}
const CustomButton: React.SFC<IProps> = (props) => {
    return (
        <Button basic color={props.color}>{props.buttonText}</Button>
    )
}

addDecorator(withKnobs);
storiesOf('Button', module)
    .addDecorator(story => <Segment>{story()}</Segment>)
    .addWithJSX('Basic', () => <CustomButton color={text('Button color', 'black')} buttonText={text('Label', 'This is a button')}/>)