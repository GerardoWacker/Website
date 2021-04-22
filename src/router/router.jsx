import React, { useContext, useLayoutEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { locationToRoute } from './utils';

const history = createBrowserHistory();
export const RouterContext = React.createContext({
    route: locationToRoute(history),
});

const RouterProvider = ({ routeList, children }) => {
    const routes = routeList.map((r) => r.path);

    const [route, setRoute] = useState(locationToRoute(history.location));

    const handleRouteChange = ({ location }) => {
        const route = locationToRoute(location);
        setRoute(route);
    };

    const is404 = routes.indexOf(route.path) === -1;

    useLayoutEffect(() => {
        let unlisten = history.listen(handleRouteChange);
        return () => {
            unlisten();
        };
    }, []);

    return (
        <RouterContext.Provider value={{ route }}>
            {is404 ? routeList.find((route) => !route.path).component ?? <p>Not path found</p> : children}
        </RouterContext.Provider>
    );
};

const useRouter = () => useContext(RouterContext);

export { useRouter, RouterProvider, history };