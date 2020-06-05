import IProjectImage from "./IProjectImage";
import ImageData from "./IImageData";

export default interface IProject {
    _id?: string,
    title: string,
    description: string, 
    link: string,
    creatorId?: string,
    images: IProjectImage[] | ImageData[]
}
