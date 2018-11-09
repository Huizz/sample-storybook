import * as React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';

interface IProps {
    showSideMenu: boolean,
    hideSidebar: () => void
}

const SideMenu: React.SFC<IProps> = props => {
    console.log(props, 'props in side menu')
    return (
        <Sidebar 
            as={Menu} 
            animation='overlay'
            fixed='left' 
            onHide={onSidebarHide(props)}
            width='thin'
            vertical
            visible={props.showSideMenu}>
            <Menu.Item
                name='home'
                active={false}
                onClick={onClick(props)}>
            </Menu.Item>
            <Menu.Item
                name='form'
                active={false}
                onClick={onClick(props)}>
            </Menu.Item>
        </Sidebar>
    )
}

export const onClick = (props: IProps) => (event: React.SyntheticEvent, data: object) => {
    console.log(data, 'data when clicked')
    props.hideSidebar();
}

const onSidebarHide = (props: IProps) => (event: React.MouseEvent<HTMLElement>) => {
    props.hideSidebar();
}

export default SideMenu;