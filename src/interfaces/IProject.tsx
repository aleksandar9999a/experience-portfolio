import ImageData from "./IImageData";

export default interface IProject {
    title: string,
    description: string,
    link?: string,
    images: ImageData[]
}