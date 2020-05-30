import React, { useState, useEffect } from 'react';
import './Settings.css';
import { getSkills } from './../../services/db';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';
import Timeline from '../timeline/Timeline';

function SkillsSettings() {
    const [description, setDescription] = useState<string>();
    const [timelineItems, setTimelineItems] = useState<TimelineItemsInterface[]>([]);

    useEffect(() => {
        const skillsData = getSkills().subscribe((data: any) => {
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
        // console.log(items);

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
                <div className="settings-submit-button-wrapper">
                    <button className="settings-submit-button">Update Skills</button>
                </div>
            </form>
        </div>
    );
}

export default SkillsSettings;
