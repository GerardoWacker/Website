import React from 'react';
import { createBrowserHistory } from 'history'
import Route from './route';
import { pathToRegexp } from 'path-to-regexp';

export const history = createBrowserHistory()

export default class Router extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      url: window.location.pathname,
      state: {}
    }
  }

  componentDidMount = () => {
    history.listen(e => this.setState(s => s.url != e.location.pathname ? { url: e.location.pathname, state: e.location.state } : s));
  }

  judgeComponent(component) {
    if (component == null || component.props == undefined || component.type == Route && !component.props.path) return component;

    const keys = [];
    let parser = new pathToRegexp(component.props.path ?? "", keys);
    let similar = parser.exec(this.state.url);

    if (component.type == Route && component.props.path != this.state.url && !similar) return <></>;

    const params = keys.reduce((_, curr, index, __) => {
      m[curr.name] = similar[index + 1];
      return curr;
    }, {});

    return similar ? React.cloneElement(component, { path: similar[0], params: params, state: this.state.state }) : component
  }

  isMatch = () => {
    window.scrollTo(0, 0);
    if (Array.isArray(this.props.children)) {

      const childs = this.props.children.map((comp, k) => this.judgeComponent(comp));

      var component = childs.find(c => c.props.path == this.state.url);

      if (component) {
        const { children, path, params, state } = component.props
        return React.cloneElement(children, { path, params, state });
      } else {
        return childs.find(c => c.type == Route && !c.props.path);
      }
    }

    return this.props.children
  }

  render(props) {
    return this.isMatch();
  }

}