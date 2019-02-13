import React from 'react';
import withStyles, { WithSheet } from 'react-jss';

interface IProps extends WithSheet<typeof styles, {}, {}> {
    size?: number
}

const styles = {
    ['col-1']: {
        width: '100%',
        flexBasis: '100%',
        padding: '15px',
        boxSizing: 'border-box',
    },
    ['col-6']: {
        maxWidth: '50%',
        flexBasis: '50%',
        padding: '15px',
        boxSizing: 'border-box',
    }
}

const Col: React.SFC<IProps> = ({ classes, size = 1, children }) => {
    const name = `col-${size}` as keyof typeof styles;
    return (
        <div className={classes[name]}>
            {children}
        </div>
    )
};

export default withStyles(styles)(Col);