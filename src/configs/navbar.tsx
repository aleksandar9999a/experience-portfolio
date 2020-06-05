import ITab from "../interfaces/ITab";
import * as Icons from 'react-bootstrap-icons';

const tabsConfig: ITab[] = [
    { name: 'Projects', route: '/projects', Icon: Icons.ColumnsGap },
    { name: 'Skills', route: '/skills', Icon: Icons.CodeSlash },
    { name: 'Home', route: '/', Icon: Icons.House },
    { name: 'About', route: '/about', Icon: Icons.Person },
    { name: 'Contacts', route: '/contacts', Icon: Icons.ChatDots },
    { name: 'Settings', route: '/settings', Icon: Icons.Gear },
    { name: 'Log Out', route: '/logout', Icon: Icons.ArrowBarRight }
]

export default tabsConfig;