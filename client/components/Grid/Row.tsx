import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

interface Props extends WithSheet<typeof styles, {}, {}> {}

const styles = {
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyItems: 'space-around',
        alignItems: 'center', 
    }
};

const Row: React.SFC<Props> = ({ classes, children }) => (
    <div className={classes.row}>
        {children}
    </div>
);

export default withStyles(styles)(Row);
