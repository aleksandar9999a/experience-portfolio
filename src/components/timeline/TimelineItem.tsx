import React, { useState, SyntheticEvent } from 'react';
import './Timeline.css';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';
import TimelineValue from '../../types/TimelineValue.types';


function TimelineItem(props: { item: TimelineItemsInterface, isEditable?: boolean, index?: number, onSubmit?: Function }) {
    const { item, isEditable, index, onSubmit } = props;
    const [title, setTitle] = useState<string>(item.title);
    const [desc, setDesc] = useState<string>(item.desc);
    const [link, setLink] = useState<string>(item.link || '');
    const [start, setStart] = useState<string>(item.start || '');
    const [end, setEnd] = useState<string>(item.end || '');
    const [message, setMessage] = useState<string>('');


    function handleChange(type: string, event: any) {
        const value = event.target.value as string;
        const types: TimelineValue = {
            title: setTitle,
            desc: setDesc,
            link: setLink,
            start: setStart,
            end: setEnd
        }

        if (types[type]) {
            types[type](value);
        }

    }

    function submit(e: SyntheticEvent) {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({
                index,
                data: { title, desc, link, start, end }
            });
            setMessage('Successful updated!');
            setTimeout(() => {
                setMessage('');
            }, 2000);
        }
    }


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
                            onChange={handleChange.bind(TimelineItem, 'title')}
                        />
                    </div>
                    <div className="timeline-body">
                        <textarea
                            className="timeline-textarea"
                            placeholder="Description"
                            value={desc}
                            onChange={handleChange.bind(TimelineItem, 'desc')}
                        />
                    </div>
                    <div className="timeline-link">
                        <input
                            className="timeline-input"
                            type="text"
                            placeholder="Link"
                            value={link}
                            onChange={handleChange.bind(TimelineItem, 'link')}
                        />
                    </div>
                    <div className="timeline-time">
                        <input
                            className="timeline-time-input"
                            type="text"
                            placeholder="Start Time"
                            value={start}
                            onChange={handleChange.bind(TimelineItem, 'title')}
                        />
                        <input
                            className="timeline-time-input"
                            type="text"
                            placeholder="End Time"
                            value={end}
                            onChange={handleChange.bind(TimelineItem, 'title')}
                        />
                    </div>
                    <div className="timeline-submit">
                        <button onClick={submit} className="timeline-submit-button">Submit</button>
                    </div>
                    <p className="timeline-message">{message}</p>
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
