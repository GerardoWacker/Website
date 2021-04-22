import React from 'react';
import { history } from './router';

export default class Link extends React.Component {

  render() {
    let { to, children, state, className, id } = this.props;

    return <a style={{cursor: "pointer"}} data-target={to} className={className} id={id} onClick={(e) => {
      e.preventDefault();
      history.push(to, state??{})
    }}>
      {children}
    </a>
  }

}