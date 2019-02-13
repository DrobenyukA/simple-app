import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

import Navigation from '../Navigation/View';

interface IProps extends WithSheet<typeof styles, {}, {}> {};

const styles = {
    ['app-header']: { }
}

const AppHeader: React.SFC<IProps> = ({ classes }) => (
    <header className={classes["app-header"]}>
        <Navigation tag="nav" />
    </header>
);

export default withStyles(styles)(AppHeader);
