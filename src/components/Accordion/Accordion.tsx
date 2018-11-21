import * as React from 'react';
import { Accordion as SemanticAccordion, Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';
// import { boolean, text, withKnobs } from '@storybook/addon-knobs';

interface IAccordionItem {
  title: string;
  content: string;
}

interface IProps {
  activeIndex: number;
  accordionItems: IAccordionItem[];
  onClick: (index: number) => void;
}

interface IState {
  activeIndex: number;
}

class Accordion extends React.Component<IProps, IState> {
  state = { activeIndex: this.props.activeIndex }
  public render = () => {
    return (
      <>
      <SemanticAccordion>
        {this.props.accordionItems.map((accordionItem, index) => {
          return (<>
            <SemanticAccordion.Title key={'title-' + index} active={this.state.activeIndex === index} index={index} onClick={this.handleOnClick(this.props, index)}>
              {accordionItem.title}
            </SemanticAccordion.Title>
            <SemanticAccordion.Content key={'content-' + index} active={this.state.activeIndex === index}>
              <div className='content--body'>{accordionItem.content}</div>
            </SemanticAccordion.Content>
          </>)
        })}
      </SemanticAccordion>
      </>
    )
  }

  handleOnClick = (props: IProps, index: number) => (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(index, 'index in handleOnClick');
    this.setState({ activeIndex: index })
    props.onClick(index);
  }
}

/*

{props.accordionItems.map((accordionItem, index) => {
        <>
          <SemanticAccordion.Title active={props.activeIndex === index} index={index} onClick={handleOnClick(props, index)}>
            {accordionItem.title}
          </SemanticAccordion.Title>
          <SemanticAccordion.Content>
            {accordionItem.content}
          </SemanticAccordion.Content>
        </>
      })}
*/


export default Accordion;

const accordionItems = [
  {
    title: 'This is the first item',
    content: 'This is the first item body'
  },
  {
    title: 'This is the second item',
    content: 'This is the second item body'
  },
  {
    title: 'This is the third item',
    content: 'This is the third item body'
  }
];

const onClick = (index: number) => {
  console.log('accordion #' + JSON.stringify(index) + 'was clicked');
}

storiesOf('Accordion', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => <Accordion activeIndex={0} accordionItems={accordionItems} onClick={onClick} />)
