import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { Button, Segment } from 'semantic-ui-react';

import SideMenu from '../src/components/SideMenu/SideMenu';

const store = new Store({
    showSideMenu: false
});

const onClickOpenSideMenu = () => {
    store.set({ showSideMenu: !store.get('showSideMenu')})
    // console.log(store.get('showSideMenu'), 'store.get');
}

const hideSidebar = () => {
    store.set({ showSideMenu: false })
}

storiesOf('Sidemenu', module)
    .addDecorator(story => <Segment>{story()}</Segment>)
    .add('Basic', () => (<><Button onClick={onClickOpenSideMenu}>Open side menu</Button><State store={store}><SideMenu showSideMenu={store.get('showSideMenu')} hideSidebar={hideSidebar} /></State></>))

