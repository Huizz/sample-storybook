import * as React from 'react';
import { StrictAccordionProps, AccordionTitleProps, Accordion as SemanticAccordion, Segment } from 'semantic-ui-react';
import { lowercaseAndHyphen } from 'utils/strings';
import Icon from 'components/Icon';

import { addDecorator, storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import PropsTable from '../../utils/PropsTable';

import './Accordion.scss';

export interface IAccordionPanel {
  title: any;
  onTitleClick?: (event: React.MouseEvent<HTMLDivElement>, data: AccordionTitleProps) => void
  content: any;
  icon?: Element;
}

interface IProps extends StrictAccordionProps {
  id: string;
  panels: IAccordionPanel[];
}

const DEFAULT_ICON_SIZE = 24;

const generateTitleComponent = (key: string, title: any, icon?: Element) => {
  if (icon) {
    console.log('icon:', icon);
    return (
      <div className="title--with-icon" id={key}>
        <span>{title}</span>
        <Icon verticalAlign color="primary" width={DEFAULT_ICON_SIZE} height={DEFAULT_ICON_SIZE} SVG={icon} />
      </div>
    );
  }

  return <p className="title--text" id={key}>{title}</p>;
};

interface IState {
  clickedIndex: number;
  childHeight: number;
}

class Accordion extends React.Component<IProps, IState> {
  state = {
    clickedIndex: -1,
    childHeight: 0,
  }

  render() {
    const { id, panels } = this.props;
    const { clickedIndex, childHeight } = this.state;

    const accordionPanels = panels.map((panel, index) => {

      const { title, icon, content, onTitleClick: onClick } = panel;
      const key = `accordion--${lowercaseAndHyphen(title)}`;
      const titleComponent = generateTitleComponent(key, title, icon);
      const maxHeight = index === clickedIndex ? childHeight : 0;

      return {
        key,
        title: {  content: titleComponent, onClick },
        content: { content: content, style: { maxHeight } }
      }
    });


    return <SemanticAccordion id={id}
                              panels={accordionPanels} 
                              onTitleClick={this.onTitleClick}
                              exclusiv={this.props.exclusive}/>;
  }

  onTitleClick = (event: React.MouseEvent<HTMLElement>, data: any) => {
    const { nextElementSibling } = event.currentTarget;
    const { index } = data;

    if (!nextElementSibling) {
      return;
    }

    if (index === this.state.clickedIndex) {
      this.setState({ clickedIndex: -1 , childHeight: 0 });
      return;
    }
    
    this.setState({ clickedIndex: index, 
                    childHeight: nextElementSibling.scrollHeight });
  }
}

export default Accordion;

const propTypes = [
  {
    name: 'id',
    type: 'string',  
    required: true,
    description: 'The HTML id attribute of the accordion'
  },
  {
    name: 'panels',
    type: 'Array',
    required: true,
    description: 'The content used for each panel'
  }
]

const panels = [
  {
    title: 'this is accordion 1 title',
    content: <div className="content--body">This is the content for accordion 1</div>
  }, 
  {
    title: 'this is accordion 2 title',
    content: <div className="content--body">This is the content for accordion 2</div>
  }
];

const onePanel = [
  {
    title: 'this is accordion 1 title',
    content: <div className="content--body">This is the content for accordion 1</div>
  }
];

addDecorator(withKnobs);
storiesOf('Accordion', module)
  .addDecorator(story => <Segment>{<PropsTable propTypes={propTypes} />}{story()}</Segment>)
  .addWithJSX('Basic', () => {
    return (
      <div>
        <h4>Using template</h4>
        <Segment>
          <h3>Only one panel</h3>
          <Accordion id="accordion--style-guide" panels={onePanel} />
        </Segment>
        <Segment>
          <h3>Multiple panels</h3>
          <Accordion id="accordion--style-guide" panels={panels} />
        </Segment>
        
        <Segment>
          <h3>Try it!</h3>
          <Accordion 
            id="accordion--style-guide" 
            panels={[
                {
                  title: text('title1', 'this is accordion 1 title'),
                  content: <div className="content--body">{text('content1', 'This is the content for accordion 1')}</div>
                }, 
                {
                  title: text('title2', 'this is accordion 2 title'),
                  content: <div className="content--body">{text('content2', 'This is the content for accordion 2')}</div>
                }
            ]} />
        </Segment>
      </div>
    )
  })


  /*
        <Segment>
          <h3>Multiple panels opened at the same time</h3>
          <Accordion id="accordion--style-guide" panels={panels} exclusive={false}/>
        </Segment>  

  
  {
    name: 'exclusive',
    type: 'boolean',
    required: false,
    description: 'If set to true, only one panel can be opened at a time. Defaults to true'
  }
  */
