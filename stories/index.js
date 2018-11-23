import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { Grid, Segment } from 'semantic-ui-react';

import JSXAddon from 'storybook-addon-jsx';

import '../src/styles/styles.scss';

setAddon(JSXAddon);

addDecorator(withKnobs);

storiesOf('Basics', module)
    .add('Colours', () => 
        <div>
            <Segment className='color primary'>
                Primary #005ea2
            </Segment>
            <Segment className='color secondary'>
                Secondary #346c9d
            </Segment>
        </div>)
      .add('Fonts', () => 
        <div>
          <Grid>
            <Grid.Row columns={12}>
              <Grid.Column width={6}>
                <h1>H1 heading</h1>
                <p>font-size:</p>
                <p>font-size:</p>
              </Grid.Column>
              <Grid.Column>
                <h2>H2 heading</h2>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <h3>H3 heading</h3>
            </Grid.Row>
          </Grid>
        </div>
      )

// storiesOf('Atoms/Form/Button', module)
//     .addDecorator(story => <Segment>{story()}</Segment>)
//     .addWithJSX('Basic', () => <><Button basic color={text('Button color', 'black')}>{text('Label', 'This is a button')}</Button></>, 
//         {
//             info: {
//                 propTablesExclude: ['as']
//             }
//         })
//     .add('Variation', () => <><Button basic color='black'>This is a button</Button></>)