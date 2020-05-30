import ITimelineItems from "./ITimelineItems";

export default interface IAbout {
    id: string,
    description: string,
    courses: ITimelineItems[],
    creatorId: string
}