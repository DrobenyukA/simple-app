import React, { Component, Props } from 'react';
import withStyles, { WithSheet } from 'react-jss';
import { Switch, Route } from 'react-router-dom';

const styles = {
    app: {
        padding: '15px',
        textAlign: 'center',
    }
}
interface IProps extends Props<{}>, WithSheet<typeof styles, {}, {}> {}

class App extends Component<IProps> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.app}>
                <Switch>
                    <Route path="/" exact={true} render={() => (<div>Hello Wold</div>)}/>
                    <Route path="/test" render={() => (<div>Test</div>)}/>
                </Switch>
            </div>
        );
    }
}

export default withStyles(styles)(App);
