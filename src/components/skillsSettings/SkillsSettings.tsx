import React, { useState, useEffect, SyntheticEvent } from 'react';
import './SkillsSettings.css';
import { getSkills, updateSkills } from '../../services/db-user';
import ITimelineItems from '../../interfaces/ITimelineItems';
import Timeline from '../timeline/Timeline';
import ISkills from '../../interfaces/ISkills';

function SkillsSettings() {
    const [description, setDescription] = useState<string>();
    const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([]);
    const [data, setData] = useState<any>();
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        getSkills().then(({ data }: { data: ISkills }) => {
            if (data) {
                setData(data);
                setDescription(data.description);
                setTimelineItems(data.experience);
            } else {
                setMessage('No skills')
            }
        }).catch(err => {
            setMessage(err.message);
            removeMessage(3000);
        });;
    }, [])

    function handleDescriptionChange(e: any) {
        setDescription(e.target.value);
    }

    function handleTimelineChange(items: ITimelineItems[]) {
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
        <div className="skills-settings-title-wrapper">
            <h1 className="skills-settings-title">Skills</h1>
            <form className="skills-settings-form">
                <textarea className="custom-textarea" placeholder="Skills Resume"
                    value={description} onChange={handleDescriptionChange} />
                <div className="skills-settings-timeline">
                    {timelineItems.length > 0
                        ? <Timeline items={timelineItems} isEditable={true} onChange={handleTimelineChange} />
                        : null}
                </div>
                <p className="skills-settings-message">{message}</p>
                <div className="skills-settings-submit-button-wrapper">
                    <button className="skills-settings-submit-button" onClick={handleSubmit}>Update Skills</button>
                </div>
            </form>
        </div>
    );
}

export default SkillsSettings;
