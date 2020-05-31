import ITimelineItems from "./ITimelineItems";

export default interface ISkills {
    _id?: string,
    id?: string,
    description: string,
    experience: ITimelineItems[],
    creatorId: string
}