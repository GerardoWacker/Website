import qs from 'querystringify';

export function locationToRoute(location) {
    return {
        path: location.pathname,
        hash: location.hash,
        state: location.state,
        query: qs.parse(location.search),
    };
}