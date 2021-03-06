/**
 * External dependencies.
 */
import React, { useState, SyntheticEvent } from 'react';

/**
 * Internal dependencies.
 */
import TTimelineValue from '../../types/TTimelineValue';
import ITimelineItem from '../../interfaces/ITimelineItem';

import './styles.css';


function TimelineItem({ item, isEditable, id, onChange, onRemove }: ITimelineItem) {
    const [title, setTitle] = useState<string>(item.title);
    const [desc, setDesc] = useState<string>(item.desc);
    const [link, setLink] = useState<string>(item.link || '');
    const [start, setStart] = useState<string>(item.start || '');
    const [end, setEnd] = useState<string>(item.end || '');

    function handleChange(type: string, event: any) {
        const value = event.target.value as string;
        const types: TTimelineValue = {
            title: setTitle,
            desc: setDesc,
            link: setLink,
            start: setStart,
            end: setEnd
        }

        if (types[type]) {
            types[type](value);
        }

        if (onChange) {
            onChange({ id, title, desc, link, start, end });
        }
    }

    function handleRemove(e: SyntheticEvent) {
        e.preventDefault();
        if (onRemove) {
            onRemove(item);
        }
    }

    const handleTitle = (event: any) => handleChange('title', event);
    const handleDescription = (event: any) => handleChange('desc', event);
    const handleLink = (event: any) => handleChange('link', event);
    const handleStart = (event: any) => handleChange('start', event);
    const handleEnd = (event: any) => handleChange('end', event);

    if (isEditable) {
        return (
            <li className="timeline-item">
                <div className="timeline-badge" />
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <input
                            className="timeline-input"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={handleTitle}
                        />
                    </div>
                    <div className="timeline-body">
                        <textarea
                            className="timeline-textarea"
                            placeholder="Description"
                            value={desc}
                            onChange={handleDescription}
                        />
                    </div>
                    <div className="timeline-link">
                        <input
                            className="timeline-input"
                            type="text"
                            placeholder="Link"
                            value={link}
                            onChange={handleLink}
                        />
                    </div>
                    <div className="timeline-time">
                        <input
                            className="timeline-time-input"
                            type="text"
                            placeholder="Start Time"
                            value={start}
                            onChange={handleStart}
                        />
                        <input
                            className="timeline-time-input"
                            type="text"
                            placeholder="End Time"
                            value={end}
                            onChange={handleEnd}
                        />
                    </div>
                    <div className="timeline-submit">
                        <button onClick={handleRemove} className="timeline-submit-button">Remove</button>
                    </div>
                </div>
            </li>
        )
    }

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
