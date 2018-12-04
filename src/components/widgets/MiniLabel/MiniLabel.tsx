import * as React from 'react';

import './MiniLabel.scss';

interface IProps {
  name: string
}

const BackToTop: React.SFC<IProps> = (props) => (
  <div className="mini-label">
    <span className="mini-label-text">{props.name}</span>
    <div className="mini-label-underline"/>
  </div>
)

export default BackToTop;