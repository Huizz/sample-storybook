import * as React from 'react';

import './Icon.scss';

interface IProps {
  color: 'primary';
  width: number;
  height: number;
  verticalAlign?: boolean;
  SVG?: any
}

interface IStyle {
  width: number;
  height:number;
  verticalAlign?: string
}

const generateStyles = (props: IProps) => {

  let styles: IStyle = {
    width: props.width,
    height: props.height
  };

  if (props.verticalAlign) {
    styles = { ...styles, verticalAlign: 'middle' }
  }

  return styles;
}

const Icon: React.SFC<IProps> = (props) => (
  <span className={`icon icon-wrapper icon-wrapper--${props.color}`}>
    <props.SVG style={generateStyles(props)} />
  </span>
);


export default Icon;