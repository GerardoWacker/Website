import React from 'react';
import { history } from './router';

export default class NavLink extends React.Component {

  componentDidMount() {
    document.querySelector(`a[data-target="${window.location.pathname}"]`)?.classList.add("current");

    history.listen(e => {
      var element = document.querySelector(`a[data-target="${this.props.to}"]`);
      if (this.props.to == e.location.pathname) element?.classList.add("current")
      else element?.classList.remove("current");
    });
  }

  render() {
    let { to, children, state, className } = this.props;

    return <a data-target={to} className={className} onClick={(e) => {
      e.preventDefault();
      history.push(to, state ?? {})
    }}>
      {children}
    </a>
  }

}