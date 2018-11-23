import * as React from 'react';
import { Accordion as SemanticAccordion, Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';
// import { boolean, text, withKnobs } from '@storybook/addon-knobs';

interface IProps {
  title: string,
  active: boolean,
  children?: any;
}

interface IState {
  active: boolean;
}

class AccordionMenu extends React.Component<IProps, IState> {
  state = { active: this.props.active }
  public render = () => {
    return (
      <>
      <SemanticAccordion>
        {this.generateContentFromChildren(this.props)}
      </SemanticAccordion>
      </>
    )
  }

  generateContentFromChildren = (props: IProps) => {
    return (
      <>
      <SemanticAccordion.Title active={this.state.active} onClick={this.handleOnClick}>
        {props.title}
      </SemanticAccordion.Title>
      <SemanticAccordion.Content active={this.state.active}>
        {props.children}
      </SemanticAccordion.Content>
      </>
    )
  }

  handleOnClick = () => {
    const currentActiveState = this.state.active;
    this.setState({ active: !currentActiveState});
  }
}

export default AccordionMenu;

storiesOf('AccordionMenu', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => <AccordionMenu active={true} title="Content"><ul><li>Link 1</li><li>Link2</li></ul></AccordionMenu>)
