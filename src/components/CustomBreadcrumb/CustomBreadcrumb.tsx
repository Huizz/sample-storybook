import * as React from 'react';
import { Breadcrumb as SemanticBreadcrumb, Segment } from 'semantic-ui-react';
import { lowercaseAndHyphen } from 'utils/strings';
import Link from 'components/Link';
import Icon from 'components/Icon/Icon';
import PropsTable from '../../utils/PropsTable';

import './CustomBreadcrumb.scss';

import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

// custom get icon
const RightCaretIcon = (props: any) => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="caret-right" className="svg-inline--fa fa-caret-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
)

setAddon(JSXAddon);

interface ILinkItem {
  name: string;
  path: string;
  parent: string
}

interface IProps {
  currentPageName: string;
  pages: ILinkItem[];
}

const generateBreadcrumb = (pages: ILinkItem[], currentPageName: string) => {
  const breadcrumbComponents: any[] = [];

  pages.forEach((page, index) => {
    const pageId = `breadcrumb--${lowercaseAndHyphen(page.name)}`;
    const link = <Link.A href={page.path} componentId={pageId}>{page.name}</Link.A>;
    const divider = <Icon color="primary" height={20} width={20} SVG={RightCaretIcon} />
    const linkKey = `breadcrumb-link-${index}`;
    const dividerKey = `breadcrumb-divider-${index}`;
    breadcrumbComponents.push(<SemanticBreadcrumb.Section link key={linkKey} id={linkKey} as={'div'} className="breadcrumb-section">{link}</SemanticBreadcrumb.Section>);
    breadcrumbComponents.push(<SemanticBreadcrumb.Divider key={dividerKey}>{divider}</SemanticBreadcrumb.Divider>);
  });

  breadcrumbComponents.push(<SemanticBreadcrumb.Section active key="breadcrumb-active" id="breadcrumb-active">{currentPageName}</SemanticBreadcrumb.Section>);
  return breadcrumbComponents;
}

const Breadcrumb: React.SFC<IProps> = (props) => (
  <SemanticBreadcrumb>
    {generateBreadcrumb(props.pages, props.currentPageName)}
  </SemanticBreadcrumb>
);

export default Breadcrumb;

const breadcrumbs = [
  {
    name: 'Home',
    path: '/client',
    parent: ''
  },
  {
    name: 'Form',
    path: '/client/form',
    parent: ''
  }
]

const propTypes = [
  {
      name: 'pages',
      type: 'ILinkItem[]',
      required: true,
      description: 'An array of all ancestor pages to this page'
  },
  {
      name: 'currentPageName',
      type: 'string',
      required: true,
      description: 'A string to ',
  }
]

storiesOf('Breadcrumb', module)
  .addDecorator(story => <Segment><PropsTable propTypes={propTypes}/> {story()} </Segment>)
  .addWithJSX('Basic', () => <>
    <Segment>
      <h3>Breadcrumb</h3>
      <Breadcrumb currentPageName='Here' pages={breadcrumbs} />
      </Segment>
  </>)