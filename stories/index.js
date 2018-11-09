import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { addDecorator, storiesOf } from '@storybook/react';
import { Button, Segment } from 'semantic-ui-react';

import '../semantic/dist/semantic.min.css';

addDecorator(withKnobs);

storiesOf('Basics', module)
    .add('Colours', () => 
        <div>
            <Segment className='grain' inverted>
                Grain
            </Segment>
            <Segment className='blackboard' inverted>
                Blackboard
            </Segment>
            <Segment className='Oxblood' inverted>
                Oxblood
            </Segment>
            <Segment className='tan' inverted>
                Tan
            </Segment>
        </div>)

storiesOf('Atoms/Form/Button', module)
    .addDecorator(story => <Segment>{story()}</Segment>)
    .add('Basic', () => <><Button basic color='black'>{text('Label', 'This is a button')}</Button></>)
    .add('Variation', () => <><Button basic color='black'>This is a button</Button></>)