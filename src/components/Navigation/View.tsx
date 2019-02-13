import React from 'react';
import * as H from 'history';
import withStyles, { WithSheet } from 'react-jss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import NavLink from './NavLink';
import { UIRoutes } from '../../constants/UIRoutes';

interface IProps extends RouteComponentProps<{ id: string }>, WithSheet<typeof styles, {}, {}> {
    tag?: React.ReactType;
};

const styles = {
    navigation: {
        textAlign: 'right',
    }
}

const getNavClickHandler = (history: H.History) => (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const { currentTarget: el } = e;
    history.push(el.hash.slice(1));
}

const Header: React.SFC<IProps> = ({ classes, history, tag: TagName = 'div' }) => {
    const clickHandler = getNavClickHandler(history);
    
    return (
        <TagName className={classes.navigation}>
            <NavLink to={UIRoutes.ROOT} label="Home" isActive={true} onClick={clickHandler} />
            <NavLink to={UIRoutes.PROJECTS} label="Projects" isActive={false} onClick={clickHandler} />
        </TagName>
    )
};


export default withRouter(
    withStyles(styles)(Header),
);
