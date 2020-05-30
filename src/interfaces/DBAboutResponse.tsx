import TimelineItemsInterface from "./TimelineItemInterface";

export default interface DBAboutResponse {
    id: string,
    description: string,
    courses: TimelineItemsInterface[],
    creatorId: string
}