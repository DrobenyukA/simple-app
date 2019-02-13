import React from 'react';

interface IProps{
    to: string;
    title?: string;
    onClick: (e: React.FormEvent<HTMLAnchorElement>) => void;
}

const Link: React.SFC<IProps> = ({ to, title, onClick, children }) => (
    <a href={to} onClick={onClick}>
        {title || children}
    </a>
);

export default Link;