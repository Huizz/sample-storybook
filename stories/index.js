import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { Button, Segment } from 'semantic-ui-react';

import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

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
    .addWithJSX('Basic', () => <><Button basic color={text('Button color', 'black')}>{text('Label', 'This is a button')}</Button></>, 
        {
            info: {
                propTablesExclude: ['as']
            }
        })
    .add('Variation', () => <><Button basic color='black'>This is a button</Button></>)