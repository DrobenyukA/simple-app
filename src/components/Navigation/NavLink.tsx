import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

import { transitionTime } from '../../constants/styles';

interface IProps extends WithSheet<typeof styles, {}, {}> {
    label: string;
    to: string;
    isActive: boolean;
    onClick: (e: React.FormEvent<HTMLAnchorElement>) => void;
}

// TODO: move colors into constants;

const styles = {
    ['nav-link']: {
        display: 'inline-block',
        margin: '5px',
        padding: '4px 6px',
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.15rem',
        fontWeight: 'bold',
        transition: `color, ${transitionTime}ms`,
        ['&:hover']: {
            color: 'red',
            textDecoration: 'underline',
        }
    }, 
    ['& active']: {
        color: 'yellow',
    }
}

const NavLink: React.SFC<IProps> = ({ to, label, onClick, classes, isActive }) => (
    <a
        href={`#${to}`}
        onClick={onClick}
        className={`${classes['nav-link']}${isActive ? ' active' : ''}`}
    >
        {label}
    </a>
)

export default withStyles(styles)(NavLink);
