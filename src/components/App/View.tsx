import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

import Router from './Router';
import AppHeader from './Header';
import AppFooter from './Footer';

const styles = {
    app: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#ccc',
    }
}

interface IProps extends WithSheet<typeof styles, {}, {}> {}

const AppView: React.SFC<IProps> = ({ classes }) => (
    <div className={classes.app}>
        <AppHeader />
        <Router />
        <AppFooter />
    </div>
);

export default withStyles(styles)(AppView);
