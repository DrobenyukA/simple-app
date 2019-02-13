import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

interface IProps extends WithSheet<typeof styles, {}, {}> {}

const styles = {
    page: {
        flexGrow: 1,
    },
}

const Page: React.SFC<IProps> = ({ classes, children }) => (
    <div className={classes.page}>
        {children}
    </div>
);

export default withStyles(styles)(Page);