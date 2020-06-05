import React from 'react';
import { Switch, Route } from 'react-router-dom';
import settingsLinks from '../../configs/settingsLinks';


function SettingsContainer() {
    const listOfRoutes = settingsLinks.map(({ path, Component }, i) => <Route path={path} key={i}><Component /></Route>);

    return (
        <Switch>
            {listOfRoutes}
        </Switch>
    );
}

export default SettingsContainer;
