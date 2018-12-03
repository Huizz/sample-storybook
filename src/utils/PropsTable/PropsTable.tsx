import * as React from 'react';

interface IPropType {
  type: string;
  name: string;
  required: boolean;
  description: string;
}

interface IProps {
  propTypes: IPropType[];
}

const PropsTable = (props: IProps) => {
  return (
    <div style={{marginBottom: '32px'}}>
      <h3>Properties</h3>
      <table className="ui table">
        <thead>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </thead>
        {props.propTypes.map((prop: IPropType) => {
          return (
            <tr>
              <td>{ prop.name }</td>
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
