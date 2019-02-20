import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { UIRoutes } from '../../constants/routes';
import HomePage from '../Pages/Home';
import ProjectPage from '../Pages/ProjectPage';
import ProjectsPage from '../Pages/ProjectsPage';

const AppRouter: React.SFC<{}> = ({}) => (
    <Switch>
        <Route path={UIRoutes.ROOT} exact={true} component={HomePage}/>
        <Route path={UIRoutes.PROJECTS} exact={true} component={ProjectsPage}/>
        <Route path={UIRoutes.PROJECT} component={ProjectPage}/>
        <Route render={() => (<div>Page not found</div>)}/>
    </Switch>
);

export default AppRouter;
