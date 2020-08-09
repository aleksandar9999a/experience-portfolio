/**
 * External dependencies.
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import settingsLinks from '../../configs/settingsLinks';


function SettingsContainer() {
    return (
        <Switch>
            {settingsLinks.map(({ path, Component }, i) => {
                return <Route path={path} key={i} exact><Component /></Route>
            })}
        </Switch>
    );
}

export default SettingsContainer;
