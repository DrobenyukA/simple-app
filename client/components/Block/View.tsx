import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

import { colors } from '../../constants/styles';

const styles = {
    block: {
        padding: '15px',
        backgroundColor: colors.white,
        border: `1px solid ${colors.darkGray}`,
        borderRadius: '15px',
    }
};

interface Props extends WithSheet<typeof styles, {}, {}> {}

const Block: React.SFC<Props> = ({ classes, children }) => (
    <div className={classes.block}>
        {children}
    </div>
);

export default withStyles(styles)(Block);
