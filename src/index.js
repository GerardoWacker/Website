import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Home } from './pages/home'
import { AppError } from './pages/error'
import { RouterProvider } from './router/router';
import { Route } from './router/route';
import { EmailDisclaimer } from './pages/email-disclaimer';
export const WebRoutes = [
    {
        path: "/",
        component: <Home />
    },
    {
        path: "/email-disclaimer",
        component: <EmailDisclaimer />
    },
    {
        path: "", // Empty string is used for the error page
        component: <AppError></AppError>
    }

]



const AppRoutes = () => <RouterProvider routeList={WebRoutes}>
    {WebRoutes.filter((route) => route.path).map((route, k) => <Route key={k} path={route.path}>{route.component}</Route>)}
</RouterProvider>


ReactDOM.render(
    <AppRoutes></AppRoutes>,
    document.getElementById("root")
);

export default AppRoutes;