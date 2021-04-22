import React from 'react';
import { RouterContext } from './router';

export function Route({ path, children }) {
  const { route } = React.useContext(RouterContext);

  if (route.path !== path) {
    return null;
  }

  return children;
}