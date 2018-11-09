import * as React from 'react';
import { Breadcrumb, Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

const CustomBreadcrumb: React.SFC<{}> = () => {
    return(
        <Breadcrumb>
            <Breadcrumb.Section link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right angle' />
            <Breadcrumb.Section link>Store</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right angle' />
            <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
        </Breadcrumb>
    )
}

export default CustomBreadcrumb;

storiesOf('Breadcrumb', module)
    .addDecorator(story => <Segment>{story()}</Segment>)
    .add('Basic', () => <>
        <CustomBreadcrumb />
    </>)
