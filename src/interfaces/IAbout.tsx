import ITimelineItems from "./ITimelineItems";

export default interface IAbout {
    _id?: string,
    id?: string,
    description: string,
    courses: ITimelineItems[],
    creatorId: string
}