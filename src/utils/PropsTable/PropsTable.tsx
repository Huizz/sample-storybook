import * as React from 'react';

interface IPropType {
  type: string;
  required: boolean;
  description: string;
}

interface IProps {
  propTypes: IPropType[];
}

const PropsTable = (props: IProps) => {
  return (
    <div style={{marginBottom: '32px'}}>
      <h2>Properties</h2>
      <table>
        <thead>
          <td>Property</td>
          <td>Required</td>
          <td>Description</td>
        </thead>
        {props.propTypes.map((prop: IPropType) => {
          return (
            <tr>
              <td>{ prop.type }</td>
              <td>{ prop.required? 'required' : '' }</td>
              <td>{ prop.description }</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default PropsTable;
