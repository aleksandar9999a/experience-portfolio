import TimelineItemsInterface from "./TimelineItemInterface";

export default interface DBSkillsResponse {
    id: string,
    description: string,
    experience: TimelineItemsInterface[],
    creatorId: string
}