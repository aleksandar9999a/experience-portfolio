import IUploadedImage from "./IUploadedImage";

export default interface IProject {
    _id?: string,
    title: string,
    description: string, 
    link: string,
    creatorId?: string,
    images: IUploadedImage[]
}
