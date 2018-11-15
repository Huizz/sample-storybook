import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { Button, Segment } from 'semantic-ui-react';

import JSXAddon from 'storybook-addon-jsx';

import '../src/styles/styles.scss';

setAddon(JSXAddon);

addDecorator(withKnobs);

storiesOf('Basics', module)
    .add('Colours', () => 
        <div>
            <Segment className='grain' inverted>
                Grain #D7CECC
            </Segment>
            <Segment className='blackboard' inverted>
                Blackboard #565656
            </Segment>
            <Segment className='oxblood' inverted>
                Oxblood #76323F
            </Segment>
            <Segment className='tan' inverted>
                Tan #C09F80
            </Segment>
        </div>)

// storiesOf('Atoms/Form/Button', module)
//     .addDecorator(story => <Segment>{story()}</Segment>)
//     .addWithJSX('Basic', () => <><Button basic color={text('Button color', 'black')}>{text('Label', 'This is a button')}</Button></>, 
//         {
//             info: {
//                 propTablesExclude: ['as']
//             }
//         })
//     .add('Variation', () => <><Button basic color='black'>This is a button</Button></>)