import TIconsOptions from "../types/TIconsOptions";

export default interface ICustomLink {
    alt: string,
    icon: keyof TIconsOptions,
    link: string,
    key?: number
}