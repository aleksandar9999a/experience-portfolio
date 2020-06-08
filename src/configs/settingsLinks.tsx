import CreateProject from "../pages/CreateProject";
import ProjectsSettings from "../pages/ProjectsSettings";
import SkillsSettings from "../pages/SkillsSettings";
import AboutSettings from "../pages/AboutSettings";
import MainInfoSettings from "../pages/MainInfoSettings";
import ProjectDetails from "../pages/ProjectDetails";
import ContactsSettings from "../pages/ContactsSettings";

const settingsLinks = [
    { path: '/settings/projects/createProject', Component: CreateProject },
    { path: '/settings/projects/:id', Component: ProjectDetails },
    { path: '/settings/projects', Component: ProjectsSettings },
    { path: '/settings/skills', Component: SkillsSettings },
    { path: '/settings/about', Component: AboutSettings },
    { path: '/settings/contacts', Component: ContactsSettings },
    { path: '/settings', Component: MainInfoSettings },
]

export default settingsLinks;