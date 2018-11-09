import React from 'react';
import { storiesOf } from '@storybook/react';
import { Segment } from 'semantic-ui-react';
import SearchBar from '../src/components/SearchBar/SearchBar';

import '../semantic/dist/semantic.min.css';

storiesOf('Search bar', module)
    .addDecorator(story => <Segment>{story()}</Segment>)
    .add('Basic', () => <>
        <p>Description of how search bar works</p>
        <SearchBar />
    </>)
    // .add('Variation', () => <><Header as='h1'>Variation button</Header><Button basic color='black'>This is a button</Button></>)

