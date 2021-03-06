import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

import Navigation from '../Navigation/View';
import { darkGray } from '../../constants/styles';

interface Props extends WithSheet<typeof styles, {}, {}> {}

const styles = {
    ['app-header']: {
        backgroundColor: darkGray,
    }
};

const AppHeader: React.SFC<Props> = ({ classes }) => (
    <header className={classes['app-header']}>
        <Navigation tag="nav" />
    </header>
);

export default withStyles(styles)(AppHeader);
