import * as React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import Link from 'components/Link';
import './SideMenu.scss';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

const HamburgerMenuIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
)

const CloseIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
)

interface IProps {
  onHideSidebar: (data: any) => void,
  sidebarItems: any
}

interface IState {
  isMenuOpen: boolean
}

class SideMenu extends React.Component<IProps, IState> {
  state = {
    isMenuOpen: false
  }

  render = () => {
    console.log('is visible: ', this.state.isMenuOpen);
    return (
      <div className='sidemenu'>
        <div className='sidemenu--toggle' onClick={this.toggleSidebar}><HamburgerMenuIcon /></div>
        <Sidebar
          as={Menu}
          animation='overlay'
          direction='top'
          onHide={this.onSidebarHide}
          width='thin'
          vertical
          visible={this.state.isMenuOpen}>
          <div className='sidemenu--close' onClick={this.toggleSidebar}><CloseIcon /></div>
          <div className='sidemenu--title'>This is the title</div>
          {this.props.sidebarItems.map((item: any) => (
            item
          ))}
        </Sidebar>
      </div>
    )
  }

  onSidebarHide = () => {
    this.props.onHideSidebar;
  }

  toggleSidebar = () => {
    const currentMenuState = this.state.isMenuOpen;
    this.setState({ isMenuOpen: !currentMenuState});
  }
}

export default SideMenu;

const testOnHideSidebar = () => {
  console.log('testOnHideSidebar');
}

const props = {
  href:'/guides',
  name:'Guides',
  componentId: 'link--guides'
}

const items = [
  <Link.A {...props} noUnderline/>,
  <Link.A href='/find' name='Find a place' componentId='link--find' noUnderline />,
  <Link.Button type='ghost' length='fit' name='Log in to vault' href='/' />
]

storiesOf('Side Menu', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => {
    return (
      <>
        <Segment style={{backgroundColor: '#f2f8ff'}}>
          <h3>Side Menu</h3>
          <SideMenu onHideSidebar={testOnHideSidebar} sidebarItems={items}/>
        </Segment>
      </>
    )
  });