import React from 'react';

interface Props {
    to: string;
    title?: string;
    onClick: (e: React.FormEvent<HTMLAnchorElement>) => void;
}

const Link: React.SFC<Props> = ({ to, title, onClick, children }) => (
    <a href={to} onClick={onClick}>
        {title || children}
    </a>
);

export default Link;
