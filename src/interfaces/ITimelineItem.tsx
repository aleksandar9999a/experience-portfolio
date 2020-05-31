import ITimelineItems from "./ITimelineItems";

export default interface ITimelineItem {
    item: ITimelineItems,
    isEditable?: boolean,
    id?: number,
    onChange?: Function,
    onRemove?: Function
}