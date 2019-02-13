import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { UIRoutes } from '../../constants/UIRoutes';

const AppRouter: React.SFC<{}> = ({}) => (
    <Switch>
        <Route path={UIRoutes.ROOT} exact={true} render={() => (<div>Hello Wold</div>)}/>
        <Route path={UIRoutes.PROJECTS} render={() => (<div>Projects</div>)}/>
        <Route path={UIRoutes.PROJECT} render={() => (<div>Projects</div>)}/>
        <Route render={() => (<div>Page not found</div>)}/>
    </Switch>
);

export default AppRouter;