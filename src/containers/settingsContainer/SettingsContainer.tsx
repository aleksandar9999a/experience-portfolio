import React from 'react';
import MainInfoSettings from '../../pages/mainInfoSettings/MainInfoSettings';
import ProjectsSettings from '../../pages/projectsSettings/ProjectsSettings';
import SkillsSettings from '../../pages/skillsSettings/SkillsSettings';
import AboutSettings from '../../pages/aboutSettings/AboutSettings';
import { Switch, Route } from 'react-router-dom';

const links = [
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
