import TimelineItemsInterface from "./TimelineItemInterface";

export default interface DBAboutResponse {
    description: string,
    courses: TimelineItemsInterface[]
}