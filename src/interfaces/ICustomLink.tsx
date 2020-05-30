import IconsOptions from "../types/IconsOptions";

export default interface ICustomLink {
    alt: string,
    icon: keyof IconsOptions,
    link: string,
    key?: number
}