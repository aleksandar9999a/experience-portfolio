import React from 'react';
import './Timeline.css';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';
import TimelineItem from './TimelineItem';

const generateItems = (item: TimelineItemsInterface, i: number) => (<TimelineItem item={item} key={i} />)


function Timeline(props: { items: TimelineItemsInterface[]}) {
    const listOfItems = props.items.map(generateItems);
    return (
        <ul className="timeline">
            {listOfItems}
        </ul>
    );
}

export default Timeline;
