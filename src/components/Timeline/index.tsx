import React from 'react';
import ITimelineItems from '../../interfaces/ITimelineItems';
import TimelineItem from '../TimelineItem';
import TimelineAddItem from '../TimelineAddItem';
import ITimeline from '../../interfaces/ITimeline';
import './styles.css';


function Timeline({ items, isEditable, onChange, onRemove, onAdd }: ITimeline) {
    return (
        <ul className="timeline">
            {items.map((item: ITimelineItems) => {
                return <TimelineItem
                    item={item}
                    id={item.id}
                    key={item.id}
                    isEditable={isEditable}
                    onChange={onChange}
                    onRemove={onRemove}
                />
            })}
            {isEditable
                ? <TimelineAddItem onClick={onAdd as Function} />
                : null}
        </ul>
    );
}

export default Timeline;
