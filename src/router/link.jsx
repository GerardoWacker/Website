import React from 'react';
import { useRouter, history } from './router';

export default function Link({ to, children, state, onClick, ...props }) {
    const { route } = useRouter();

    const handleClick = (e) => {
        e.preventDefault();

        if (route.path === to) {
            return;
        }
        if (onClick) {
            onClick(e);
        }
        history.push(to, state ? state : {});
    };

    return (
        <a {...props} onClick={handleClick}>
            {children}
        </a>
    );
}