import React from 'react';
import { Switch, Route } from "react-router-dom";
import links from '../../configs/containerLinks';


function Container() {
    const listOfRoutes = links.map(({ path, Component }, i) => <Route path={path} key={i} exact><Component /></Route>);

    return (
        <Switch>
            {listOfRoutes}
        </Switch>
    );
}

export default Container;
