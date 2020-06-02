import React from 'react';
import MainInfoSettings from '../../pages/MainInfoSettings';
import ProjectsSettings from '../../pages/ProjectsSettings';
import SkillsSettings from '../../pages/SkillsSettings';
import AboutSettings from '../../pages/AboutSettings';
import { Switch, Route } from 'react-router-dom';
import CreateProject from '../../pages/CreateProject';

const links = [
    { path: '/settings/projects/createProject', Component: CreateProject },
    { path: '/settings/projects', Component: ProjectsSettings },
    { path: '/settings/skills', Component: SkillsSettings },
    { path: '/settings/about', Component: AboutSettings },
    { path: '/settings', Component: MainInfoSettings },
]

const listOfRoutes = links.map(({ path, Component }, i) => <Route path={path} key={i}><Component /></Route>);

function SettingsContainer() {
    return (
        <Switch>
            {listOfRoutes}
        </Switch>
    );
}

export default SettingsContainer;
