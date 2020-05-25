import React from 'react';
import './Timeline.css';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';

function TimelineItem(props: { item: TimelineItemsInterface}) {
    const item = props.item;
    return (
        <li className="timeline-item">
            <a href={item.link} target="_blank" className="timeline-link" rel="noopener noreferrer">
                <div className="timeline-badge" />
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4 className="timeline-title">{item.title}</h4>
                    </div>
                    <div className="timeline-body">
                        <p className="timeline-text">{item.desc}</p>
                    </div>
                    <div className="timeline-time">
                        {item.start ? <p className="timeline-start">Start: <span className="timeline-date">{item.start}</span></p> : null}
                        {item.end ? <p className="timeline-end">End: <span className="timeline-date">{item.end}</span></p> : null}
                    </div>
                </div>
            </a>
        </li>
    )
}

export default TimelineItem;
