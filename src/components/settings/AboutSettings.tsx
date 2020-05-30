import React, { useEffect, useState, SyntheticEvent } from 'react';
import './Settings.css';
import { getAbout, updateAbout } from '../../services/db-user';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';
import Timeline from '../timeline/Timeline';

function AboutSettings() {
    const [data, setData] = useState<any>();
    const [description, setDescription] = useState<string>();
    const [timelineItems, setTimelineItems] = useState<TimelineItemsInterface[]>([]);
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        const aboutData = getAbout().subscribe((data: any) => {
            setData(data);
            setDescription(data.description);
            setTimelineItems(data.courses);
        });
        return () => {
            aboutData.unsubscribe();
        }
    }, [])

    function handleDescriptionChange(e: any) {
        setDescription(e.target.value);
    }

    function handleTimelineChange(items: TimelineItemsInterface[]) {
        setTimelineItems(items);
    }

    function removeMessage(time: number) {
        setTimeout(() => {
            setMessage('');
        }, time);
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (!data._id || !description) {
           return; 
        }

        const newData = {
            id: data._id,
            creatorId: data.creatorId,
            description: description,
            courses: timelineItems
        };
        
        updateAbout(newData).then(() => {
            setMessage('Successful updated!');
            removeMessage(3000);
        }).catch(err => { 
            setMessage('Something is wrong!');
            removeMessage(3000);
        })
    }

    return (
        <div className="settings-title-wrapper">
            <h1 className="settings-title">About</h1>
            <form className="contact-form">
                <textarea className="custom-textarea" placeholder="About me"
                    value={description} onChange={handleDescriptionChange} />
                <div className="settings-skills-timeline">
                    { timelineItems.length > 0
                    ? <Timeline items={timelineItems} isEditable={true} onChange={handleTimelineChange} />
                    : null}
                </div>
                <p className="settings-skills-message">{message}</p>
                <div className="settings-submit-button-wrapper">
                    <button className="settings-submit-button" onClick={handleSubmit}>Update</button>
                </div>
            </form>
        </div>
    );
}

export default AboutSettings;
