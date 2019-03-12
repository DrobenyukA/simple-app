import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

import { transitionTime, colors, } from '../../constants/styles';

interface Props extends WithSheet<typeof styles, {}, {}> {
    label: string;
    to: string;
    onClick: (e: React.FormEvent<HTMLAnchorElement>) => void;
}

// TODO: move colors into constants;

const styles = {
    ['nav-link']: {
        display: 'inline-block',
        margin: '5px',
        padding: '4px 6px',
        color: colors.white,
        textDecoration: 'none',
        fontSize: '1.15rem',
        fontWeight: 'bold',
        transition: `color, ${transitionTime}ms`,
        ['&:hover']: {
            color: colors.red,
            textDecoration: 'underline',
        }
    }
};

const NavLink: React.SFC<Props> = ({ to, label, onClick, classes }) => (
    <a
        href={`#${to}`}
        onClick={onClick}
        className={`${classes['nav-link']}`}
    >
        {label}
    </a>
);

export default withStyles(styles)(NavLink);
