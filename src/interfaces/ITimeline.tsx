import ITimelineItems from "./ITimelineItems";

export default interface ITimeline {
    items: ITimelineItems[], 
    isEditable?: boolean, 
    onChange?: Function
}