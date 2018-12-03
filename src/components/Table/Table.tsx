import * as React from 'react';
import { Table as SemanticUITable, Segment } from 'semantic-ui-react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import PropsTable from 'utils/PropsTable';

import './Table.scss';

interface IProps {
  id: string;
  headerText: string[];
  cellRowText: ICellProps[][];
}

interface ICellProps {
  showContentOnMobile?: boolean;
  content: any;
}

const Table: React.SFC<IProps> = (props) => {
  const { id, headerText, cellRowText } = props;
  const { Header, Row, HeaderCell, Body, Cell } = SemanticUITable;

  return (
    <SemanticUITable celled id={id}>
      <Header>
        <Row>
          { headerText.map( (h, hIndex) => { return <HeaderCell key={hIndex}>{h}</HeaderCell> }) }
        </Row>
      </Header>

      <Body>
        { 
          cellRowText.map( (rowCells, rowIndex) => {
            const cells = rowCells.map( (cell, columnIndex) => { 
              const { content, showContentOnMobile } = cell;
              return (<Cell key={columnIndex}>
                        {showContentOnMobile && <span className='table--cell--mobile-label'>{headerText[columnIndex]}: </span>} 
                        {content}                                                                                                                                                                                  
                      </Cell>);
            });
            return <Row key={rowIndex}>{cells}</Row>;
          })
        }
      </Body>

    </SemanticUITable>
  );
};

export default Table;

const propTypes = [
  {
    name: 'id',
    type: 'string',
    required: true,
    description: 'The id of the table generated'
  },
  {
    name: 'headerText',
    type: 'String array',
    required: true,
    description: 'An array of string to show in the header cells'
  },
  {
    name: 'cellRowText',
    type: 'ICellProps[][]',
    required: true,
    description: 'Nested array of ICellProps'
  },
  {
    name: 'ICellProps',
    type: 'object',
    required: true,
    description: 'An object { showContentOnMobile: boolean, content: any }. showContentOnMobile is not required '
  }
]

addDecorator(withKnobs);
storiesOf('Table', module)
  .addDecorator(story => <Segment><PropsTable propTypes={propTypes} />{story()}</Segment>)
  .addWithJSX('Basic', () => 
    <>
      <h3>Table</h3>
      <Table id='test--table'
        headerText={[text('Header cell', 'Header cell 1'), text('Header cell two', 'Child under 10 years old'), text('Header cell three', 'Adult')]}
        cellRowText={[
          [{ content: text('Cell 1', 'Bacon ipsum dolor amet shankle landjaeger shank prosciutto.') }, { content: text('Cell 2', 'Cell 2') }, { content: text('Cell 3', 'Cell 3') }],
          [{ content: text('Row 2 cell 1', 'Bacon ipsum dolor amet shankle landjaeger shank prosciutto.') }, { content: text('Row 2 Cell 2', 'Cell 2') }, { content: text('Row 2 Cell 3', 'Cell 3') }]
        ]} />
    </>)