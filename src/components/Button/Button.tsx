import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import PropsTable from '../../utils/PropsTable';

import './Button.scss';

interface IComponent {
    className?: string
}

export interface IProps extends IComponent {
    name: string;
    secondaryText?: string
    type: 'primary' | 'ghost' | 'secondary' | string;
    length: 'fill' | 'fit' | 'responsive-fit' | string;
    onClick?(): void;
}
const Button: React.SFC<IProps> = (props) => {

    const className: string = `button ${props.type} ${props.length}`;

    return (
        <button className={className} onClick={props.onClick}>
            {props.name}
            {props.secondaryText && <span className="secondary-text">{props.secondaryText}</span>}
        </button>
    );
};

const propTypes = [
    {
        name: 'name',
        type: 'string',
        required: true,
        description: 'The text that is displayed on the button'
    },
    {
        name: 'secondaryText',
        type: 'string',
        required: false,
        description: 'The small line of text to display under the name'
    },
    {
        name: 'type',
        type: 'string',
        required: true,
        description: 'The type of button. One of primary or ghost'
    }
]

addDecorator(withKnobs);
storiesOf('Button', module)
.addDecorator(story => <Segment>{<PropsTable propTypes={propTypes} /> }{story()}</Segment>)
    .addWithJSX('Basic', () => <>
        <Segment>
            <h3>Fill</h3>
            <p>Button fills up the entire width of container</p>
            <Button name='This is a fill button' type="primary" length='fill' />
        </Segment>
        <Segment>
            <h3>Fit</h3>
            <p>Button width fits to size of text</p>
            <Button name='This is a fit button' type="primary" length="fit" />
        </Segment>
        <Segment>
            <h3>With secondary text</h3>
            <p>Button width fits to size of text</p>
            <Button name='This is a fit button' type="primary" length="fit" secondaryText="This is secondary text" />
        </Segment>
        <Segment>
            <h3>Try it!</h3>
            <p>Change the properties on the right to see how the button changes</p>
            <Button name={text('Label', 'try to change the properties')} type={text('type', 'primary')} length={text('length', 'fit')} />
        </Segment>
    </>)