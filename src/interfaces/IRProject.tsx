export default interface IRProject {
    _id: string,
    title: string,
    description: string, 
    link: string,
    images: IProjectImage[]
}

interface IProjectImage {
    url: string, 
    id: number
}