import React, { useState, useEffect, SyntheticEvent } from 'react';
import './Settings.css';
import { getSkills, updateSkills } from './../../services/db-user';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';
import Timeline from '../timeline/Timeline';

function SkillsSettings() {
    const [description, setDescription] = useState<string>();
    const [timelineItems, setTimelineItems] = useState<TimelineItemsInterface[]>([]);
    const [data, setData] = useState<any>();
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        const skillsData = getSkills().subscribe((data: any) => {
            setData(data);
            setDescription(data.description);
            setTimelineItems(data.experience);
        });
        return () => {
            skillsData.unsubscribe();
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
            experience: timelineItems
        };
        
        updateSkills(newData).then(() => {
            setMessage('Successful updated!');
            removeMessage(3000);
        }).catch(err => { 
            setMessage('Something is wrong!');
            removeMessage(3000);
        })
    }

    return (
        <div className="settings-title-wrapper">
            <h1 className="settings-title">Skills</h1>
            <form className="contact-form">
                <textarea className="custom-textarea" placeholder="Skills Resume"
                    value={description} onChange={handleDescriptionChange} />
                <div className="settings-skills-timeline">
                    { timelineItems.length > 0
                    ? <Timeline items={timelineItems} isEditable={true} onChange={handleTimelineChange} />
                    : null}
                </div>
                <p className="settings-skills-message">{message}</p>
                <div className="settings-submit-button-wrapper">
                    <button className="settings-submit-button" onClick={handleSubmit}>Update Skills</button>
                </div>
            </form>
        </div>
    );
}

export default SkillsSettings;
