import * as React from 'react';
import { Breadcrumb, Segment } from 'semantic-ui-react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import './CustomBreadcrumb.scss';

setAddon(JSXAddon);

interface IBreadcrumbItem {
    name: string
    link: string
}
interface IProps {
    items: IBreadcrumbItem[];
    // currentPath: string;
}

// const CustomBreadcrumb: React.SFC<{}> = () => {
//     return(
//         <Breadcrumb>
//             <Breadcrumb.Section link>Home</Breadcrumb.Section>
//             <Breadcrumb.Divider icon='right angle' />
//             <Breadcrumb.Section link>Store</Breadcrumb.Section>
//             <Breadcrumb.Divider icon='right angle' />
//             <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
//         </Breadcrumb>
//     )
// }

const CustomBreadcrumb: React.SFC<IProps> = (props) => {
    return(
        <Breadcrumb>
            {props.items.map((item, index) => {
                return (
                    <>
                        <Breadcrumb.Section className={index === props.items.length - 1 ? 'active' : ''} link href={item.link}>{item.name}</Breadcrumb.Section>
                        {index < props.items.length - 1 ? <Breadcrumb.Divider icon='right angle' /> : ''}
                    </>
                )
            })}
        </Breadcrumb>
    )
}

export default CustomBreadcrumb;

const breadcrumbs = [
    {
        name: 'Home',
        link: '/client'
    },
    {
        name: 'Form',
        link: '/client/form'
    },
    {
        name: 'Here',
        link: '/client/here'
    }
]

storiesOf('Breadcrumb', module)
    .addDecorator(story => <Segment>{story()}</Segment>)
    .addWithJSX('Basic', () => <>
        <CustomBreadcrumb  items={breadcrumbs}/>
    </>)
