import React from 'react';
import './Timeline.css';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';
import TimelineItem from './TimelineItem';
import TimelineSubmit from '../../interfaces/TimelineSubmit.interface';


function Timeline(props: { items: TimelineItemsInterface[], isEditable?: boolean, onChange?: Function}) {
    const isEditable = props.isEditable || false;
    const onChange = props.onChange;
    const generateItems = (item: TimelineItemsInterface, i: number) => (<TimelineItem item={item} index={i} key={i} isEditable={isEditable} onSubmit={handleSubmit}/>)
    const listOfItems = props.items.map(generateItems);
    let newItems = [...props.items];

    function handleSubmit(change: TimelineSubmit) {
        newItems[change.index] = change.data;
        if (onChange) {
            onChange(newItems);
        }
    }

    return (
        <ul className="timeline">
            {listOfItems}
        </ul>
    );
}

export default Timeline;
