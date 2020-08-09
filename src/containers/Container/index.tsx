/**
 * External dependencies.
 */
import React from 'react';
import { Switch, Route } from "react-router-dom";

/**
 * Internal dependencies.
 */
import links from '../../configs/containerLinks';


function Container() {
    return (
        <Switch>
            {links.map(({ path, Component }, i) => {
                return <Route path={path} key={i} exact><Component /></Route>;
            })}
        </Switch>
    );
}

export default Container;
