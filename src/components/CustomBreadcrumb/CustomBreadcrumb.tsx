import * as React from 'react';
import { Breadcrumb, Segment } from 'semantic-ui-react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

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
    .addWithJSX('Basic', () => <>
        <CustomBreadcrumb />
    </>)
