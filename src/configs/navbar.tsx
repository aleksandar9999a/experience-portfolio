import ITab from "../interfaces/ITab";
import * as Icons from 'react-bootstrap-icons';

const tabsConfig: ITab[] = [
    { id: 1, name: 'Projects', route: '/projects', Icon: Icons.ColumnsGap },
    { id: 2, name: 'Skills', route: '/skills', Icon: Icons.CodeSlash },
    { id: 3, name: 'Home', route: '/', Icon: Icons.House },
    { id: 4, name: 'About', route: '/about', Icon: Icons.Person },
    { id: 5, name: 'Contacts', route: '/contacts', Icon: Icons.ChatDots },
    { id: 6, name: 'Settings', route: '/settings', Icon: Icons.Gear, auth: true },
    { id: 7, name: 'Log Out', route: '/logout', Icon: Icons.ArrowBarRight, auth: true }
]

export default tabsConfig;