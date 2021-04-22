import React from 'react';

export default class Route extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return this.props.children;
  }

}