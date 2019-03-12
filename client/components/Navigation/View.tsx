import React from 'react';
import withStyles, { WithSheet } from 'react-jss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import NavLink from './NavLink';
import { UIRoutes } from '../../constants/routes';
import { getNavClickHandler } from '../../utils/navigation';

interface Props extends RouteComponentProps<{ id: string }>, WithSheet<typeof styles, {}, {}> {
    tag?: React.ReactType;
}

const styles = {
    navigation: {
        textAlign: 'right',
    }
};

const Header: React.SFC<Props> = ({ classes, history, tag: TagName = 'div' }) => {
    const clickHandler = getNavClickHandler(history);
    return (
        <TagName className={classes.navigation}>
            <NavLink to={UIRoutes.ROOT} label="Home" onClick={clickHandler} />
            <NavLink to={UIRoutes.PROJECTS} label="Projects" onClick={clickHandler} />
        </TagName>
    );
};

export default withRouter(
    withStyles(styles)(Header),
);
