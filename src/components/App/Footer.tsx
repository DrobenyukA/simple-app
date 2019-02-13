import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

import Navigation from '../Navigation/View';

interface IProps extends WithSheet<typeof styles, {}, {}> {};

const styles = {
    ['app-footer']: { }
}

const AppFooter: React.SFC<IProps> = ({ classes }) => (
    <footer className={classes["app-footer"]}>
        <Navigation />
    </footer>
);

export default withStyles(styles)(AppFooter);