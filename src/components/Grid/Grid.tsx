import * as React from 'react';
import { Grid as SemanticGrid, Segment } from 'semantic-ui-react';

import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import './Grid.scss';

interface IColumn {
  columnWidth: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
}

interface IRow {
  columns: IColumn[]
}

interface IProps {
  rows?: IRow[];
  columns: IColumn[];
}

const generateSingleRowColumns = (columns: IColumn[]) => {
  return columns.map((column, columnIndex) => {
    return <SemanticGrid.Column computer={column.columnWidth} tablet={column.columnWidth} mobile={12}>
      <div>{column.columnWidth}</div>
    </SemanticGrid.Column>
  })
}

const Grid: React.SFC<IProps> = (props) => {
  return (
    <SemanticGrid>
      <SemanticGrid.Row>
        {generateSingleRowColumns(props.columns)}
      </SemanticGrid.Row>
    </SemanticGrid>
  )
}

export default Grid;

const rowOneColumns = [
  {
    columnWidth: '12'
  } as IColumn
]

const rowTwoColumns = [
  {
    columnWidth: '8'
  } as IColumn,
  {
    columnWidth: '4'
  } as IColumn
]

addDecorator(withKnobs);
storiesOf('Grid', module)
    .addDecorator(story => <div className="page--grid">{story()}</div>)
    .addWithJSX('Basic', () => {
      const column_one: IColumn = object('two columm, column one', {
        columnWidth: '3'
      } as IColumn)
      const column_two: IColumn = object('two column,column two', {
        columnWidth: '9'
      } as IColumn)
      const column_three: IColumn = object('three column,column one', {
        columnWidth: '2'
      } as IColumn)
      const column_four: IColumn = object('three column,column two', {
        columnWidth: '8'
      } as IColumn)
      const column_five: IColumn = object('three column,column three', {
        columnWidth: '2'
      } as IColumn)

      const defaultColumns =  [column_one, column_two];
      const defaultThreeColumns = [column_three, column_four, column_five];

      return (
        <>
          <Segment><h3>Full width Column</h3><Grid columns={rowOneColumns} /></Segment>
          <Segment><h3>Columns</h3><Grid columns={rowTwoColumns} /></Segment>
          <Segment><h3>Try it!</h3>
            <div style={{marginBottom: '16px'}}>
              <h4>Two column row</h4><Grid columns={defaultColumns} />
            </div>
            <div>
              <h4>Three column row</h4><Grid columns={defaultThreeColumns} />
            </div>
          </Segment>
        </>
      )
    })