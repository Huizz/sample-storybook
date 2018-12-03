import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Link from 'components/Link';
import Accordion from 'components/Accordion';
import { lowercaseAndHyphen } from 'utils/strings';

import './InternalMenu.scss';

export interface ILinkItem {
  name: string;
  path: string;
  parent: string
}

export interface IGuideObject {
  header: string;
  links: ILinkItem[];
  extraLinks?: {header: string, links: ILinkItem []};
}

interface IProps extends IGuideObject {
  activeIndex: number;
};

class InternalMenu extends React.Component<IProps> {

  generateLinks = (links: ILinkItem[], type: string) => (
    
    links.map((item, index) => {
      const id = `internal-menu-${type}--${lowercaseAndHyphen(item.name)}`;
      let GeneratedLink = <Link.A componentId={id} noUnderline href={item.path}><p>{item.name}</p></Link.A>
      if(this.props.links[this.props.activeIndex].path === item.path){
        GeneratedLink = <p id={id} className="internal-menu--active--link">{item.name}</p>
      }
      return<li key={index}>{GeneratedLink}</li>;
    })
  );
  
  generateMenuList = (links: ILinkItem[], type: string) => (
    <ul className="internal-menu--links">{this.generateLinks(links, type)}</ul>
  );
  
  generateExtraLinksMenu = (extraLinks: any, type: string) => (
    <div>
      <div id={`internal-menu-${type}--extra--title`} className="internal-menu--extra--title">{extraLinks.header}</div>
      <ul className="internal-menu--extra">{this.generateLinks(extraLinks.links, type)}</ul>
    </div>
  );

  generatePanel = () => {
    return [{
      title: this.props.header,
      content: (
        <div>
          {this.generateMenuList(this.props.links, 'accordion')}
          {this.props.extraLinks && this.generateExtraLinksMenu(this.props.extraLinks, 'accordion')}
        </div>
      )
    }]
  }
  
  public render = () => (
    <div className="internal-menu">
      <div className="internal-menu--list" id="internal-menu--list">
        {this.generateMenuList(this.props.links, 'list')}
        {this.props.extraLinks && this.generateExtraLinksMenu(this.props.extraLinks, 'list')}
      </div>
      <div className="internal-menu--accordion">
        <Accordion 
          id="internal-menu--accordion"
          panels={this.generatePanel()} />
      </div>
    </div>
  )

} 

export default InternalMenu;

const links: ILinkItem[] = [
  { 
    name: 'First link',
    path: '/first-link',
    parent: '',
  },
  { 
    name: 'Second link',
    path: 'second-link',
    parent: '',
  },
 { 
    name: 'Third link',
    path: 'third-link',
    parent: '',
  }
];


addDecorator(withKnobs);
storiesOf('Internal Menu', module)
    .addDecorator(story => <Segment>{story()}</Segment>)
    .addWithJSX('Basic', () => <InternalMenu links={links} activeIndex={0} header='This is the menu label'/>)