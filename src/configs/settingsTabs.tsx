import ISettingsTab from "../interfaces/ISettingsTab";

const tabsConfig: ISettingsTab[] = [
    { name: 'Main Info', route: '/settings/' },
    { name: 'Projects', route: '/settings/projects' },
    { name: 'Skills', route: '/settings/skills' },
    { name: 'About', route: '/settings/about' }
]

export default tabsConfig;