
// declare module '@storybook/addon-viewport' {
//   import * as addOnViewPort from '@storybook/addon-viewport';
//   interface Helper {
//     new(opt: addOnViewPort.Options): addOnViewPort.Type
//   }
//   export = Helper;
//   // interface withViewport {
//   //   any;
//   // }
//   // export = addOnViewPort.withViewport;
// };
import * as React from 'react';
import { Table as SemanticUITable, Segment } from 'semantic-ui-react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import './Table.scss';

interface IProps {
  id: string;
  headerText: string[];
  cellRowText: string[][];
}

const Table: React.SFC<IProps> = (props) => {
  const { id, headerText, cellRowText } = props;
  const { Header, Row, HeaderCell, Body, Cell } = SemanticUITable;

  return (
    <SemanticUITable celled id={id}>
      <Header>
        <Row>
          { headerText.map( (h) => { return <HeaderCell>{h}</HeaderCell> }) }
        </Row>
      </Header>

      <Body>
        { 
          cellRowText.map( (rowText) => {
            const cells = rowText.map( (columnText) => { return <Cell>{columnText}</Cell> });
            return <Row>{cells}</Row>;
          })
        }
      </Body>

    </SemanticUITable>
  );
};

export default Table;

// const headerText = [text('Header cell', 'Header cell 1'), text('Header cell two', 'Child under 10 years old'), text('Header cell three', 'Adult')];
// const cellRowText = [
//   [text('Cell 1', 'Cell 1'), 'Cell 2', 'Cell 3']
// ];

addDecorator(withKnobs);
storiesOf('Table', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => <Table id='test--table' 
    headerText={[text('Header cell', 'Header cell 1'), text('Header cell two', 'Child under 10 years old'), text('Header cell three', 'Adult')]} 
    cellRowText={[
      [text('Cell 1', 'Bacon ipsum dolor amet shankle landjaeger shank prosciutto.'), text('Cell 2', 'Cell 2'), text('Cell 3', 'Cell 3')],
      [text('Row 2 cell 1', 'Bacon ipsum dolor amet shankle landjaeger shank prosciutto.'), text('Row 2 Cell 2', 'Cell 2'), text('Row 2 Cell 3', 'Cell 3')]
    ]} />)