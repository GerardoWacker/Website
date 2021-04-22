import React from 'react';
import ReactDOM from 'react-dom';
import Route from "../src/router/route"
import Router from "../src/router/router"
import AppError from './pages/error'
import Home from './pages/home';

const AppRoutes = () => <Router>
  <Route path="/"><Home/></Route>
  <Route><AppError></AppError></Route>
</Router>


ReactDOM.render(
  <AppRoutes></AppRoutes>,
  document.getElementById("root")
);

export default AppRoutes;