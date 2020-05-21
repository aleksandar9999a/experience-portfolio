import IconsOptions from './IconsOptions';

export default interface CustomLinkI {
    alt: string,
    icon: keyof IconsOptions,
    link: string,
    key?: number
}