import * as React from 'react';

import Link from 'components/Link';
import { lowercaseAndHyphen } from 'utils/strings';

import './NextPrevGroup.scss';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';
import PropsTable from 'utils/PropsTable';

interface ILinkItem {
  name: string;
  path: string;
  parent: string
}

interface IProps {
  currentLinkIndex: number,
  links: ILinkItem[]
}

const renderNextLink = (currentLinkIndex: number, links: ILinkItem[]) => {
  if (currentLinkIndex === links.length - 1) { return <div/> };
  const nextLink = links[currentLinkIndex+1];
  return <Link.NextPrev 
    id={lowercaseAndHyphen(nextLink.name)} 
    name={nextLink.name} 
    href={nextLink.path} 
    direction="next" />;
}

const renderPrevLink = (currentLinkIndex: number, links: ILinkItem[]) => {
  if (currentLinkIndex === 0) { return <div/> };
  const prevLink = links[currentLinkIndex-1];
  return <Link.NextPrev 
    id={lowercaseAndHyphen(prevLink.name)} 
    name={prevLink.name}
    href={prevLink.path}
    direction="previous"/>;
}

const NextPrevGroup: React.SFC<IProps> = (props) => (
  <div className="next-prev-group">
    {renderPrevLink(props.currentLinkIndex, props.links)}
    {renderNextLink(props.currentLinkIndex, props.links)}
  </div>
);

export default NextPrevGroup;

const links: ILinkItem[] = [
  { 
    name: 'First page',
    path: '/first-link',
    parent: '',
  },
  { 
    name: 'Second page',
    path: 'second-link',
    parent: '',
  },
 { 
    name: 'Third page',
    path: 'third-link',
    parent: '',
  }
];

const propTypes = [
  {
    name: 'currentLinkIndex',
    type: 'numberr',
    required: true,
    description: 'Index of the current page link in an array of links'
  },
  {
    name: 'links',
    type: 'ILinkItem[]',
    required: true,
    description: 'An array of link items which indicates the pages using this navigation. Each link item is an object { path: string, name: string, parent: string }'
  }
]

storiesOf('Link', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Next Previous Group', () => <>
    <Segment>
      <h3>Next Previous links</h3>
      <PropsTable propTypes={propTypes} />
      <h4>Example uses guide of 3 pages</h4>
      <div>
        <h4>On page 1</h4>
        <NextPrevGroup
          currentLinkIndex={0}
          links={links} />
      </div>
      <div>
        <h4>On page 2 </h4>
        <NextPrevGroup
          currentLinkIndex={1}
          links={links} />
      </div>
      <div>
        <h4>On page 3</h4>
        <NextPrevGroup
          currentLinkIndex={2}
          links={links} />
      </div> 
    </Segment>
  </>)