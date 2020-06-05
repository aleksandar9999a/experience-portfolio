import ProjectDetails from "../pages/ProjectDetails";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Login from "../pages/Login";
import Settings from "../containers/Settings";
import Logout from "../pages/Logout";
import Home from "../pages/Home";

const links = [
    { path: '/projects/details/:id', Component: ProjectDetails },
    { path: '/projects', Component: Projects },
    { path: '/skills', Component: Skills },
    { path: '/contacts', Component: Contacts },
    { path: '/about', Component: About },
    { path: '/login', Component: Login },
    { path: '/settings', Component: Settings },
    { path: '/logout', Component: Logout },
    { path: '/', Component: Home },
]

export default links;