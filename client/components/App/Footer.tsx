import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

import Navigation from '../Navigation/View';
import { darkGray } from '../../constants/styles';

interface Props extends WithSheet<typeof styles, {}, {}> {}

const styles = {
    ['app-footer']: {
        backgroundColor: darkGray,
    },
};

const AppFooter: React.SFC<Props> = ({ classes }) => (
    <footer className={classes['app-footer']}>
        <Navigation />
    </footer>
);

export default withStyles(styles)(AppFooter);
