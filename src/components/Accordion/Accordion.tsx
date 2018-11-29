import * as React from 'react';
import { Accordion as SemanticAccordion, Segment } from 'semantic-ui-react';
import { addDecorator, storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import PropsTable from '../../utils/PropsTable';

import './Accordion.scss';

interface IAccordionPanel {
  title: any;
  content: any;
  icon?: Element;
  iconSize?: number; 
}

interface IProps {
  id: string;
  panels: IAccordionPanel[];
  exclusive?: boolean
}

const lowercaseAndHyphen = (rawString: string) => {
  return rawString.toLowerCase().replace(/[^A-Z0-9]+/ig, '-');
}

const generatePanels = (panels: IAccordionPanel[]) => {
  return panels.map(panel => {

    const key = `accordion--${lowercaseAndHyphen(panel.title)}`;
    let TitleComponent = <p className="title--text" id={key}>{panel.title}</p>;

    if(panel.icon) {
      TitleComponent = (
        <div className="title--with-icon" id={key}>
          <span>{panel.title}</span>
          {/* <Icon verticalAlign color="primary" width={panel.iconSize || 24} height={panel.iconSize || 24} SVG={panel.icon} /> */}
        </div>
      )
    }
    
    return {
      key,
      title: {  content: TitleComponent },
      content: { content: panel.content }
    }
  });
}

const Accordion: React.SFC<IProps> = (props) => (
  <SemanticAccordion id={props.id} panels={generatePanels(props.panels)} {...props} />
);

export default Accordion;

const propTypes = [
  {
    type: 'id',
    required: true,
    description: 'The HTML id attribute of the accordion'
  },
  {
    type: 'panels',
    required: true,
    description: 'The content used for each panel'
  },
  {
    type: 'exclusive',
    required: false,
    description: 'If set to true, only one panel can be opened at a time. Defaults to true'
  }
]

const panels = [
  {
    title: 'this is accordion 1 title',
    content: 'This is the content for accordion 1'
  }, 
  {
    title: 'this is accordion 2 title',
    content: 'This is the content for accordion 2'
  }
];

const onePanel = [
  {
    title: 'this is accordion 1 title',
    content: 'This is the content for accordion 1'
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
          <h3>Multiple panels opened at the same time</h3>
          <Accordion id="accordion--style-guide" panels={panels} exclusive={false}/>
        </Segment>
        <Segment>
          <h3>Try it!</h3>
          <Accordion 
            id="accordion--style-guide" 
            panels={[
                {
                  title: text('title1', 'this is accordion 1 title'),
                  content: text('content1', 'This is the content for accordion 1')
                }, 
                {
                  title: text('title2', 'this is accordion 2 title'),
                  content: text('content2', 'This is the content for accordion 2')
                }
            ]} 
            exclusive={boolean('Open one panel only', false)}/>
        </Segment>
      </div>
    )
  })
