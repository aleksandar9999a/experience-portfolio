import React, { useState, useEffect, SyntheticEvent } from 'react';
import './styles.css';
import ITimelineItems from '../../interfaces/ITimelineItems';
import Timeline from '../../components/Timeline';
import ISkills from '../../interfaces/ISkills';
import { getAuthSkills, updateAuthSkills } from '../../services';

function SkillsSettings() {
    const [description, setDescription] = useState<string>();
    const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([]);
    const [data, setData] = useState<ISkills>();
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        getAuthSkills().then(({ data }: { data: ISkills }) => {
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
        if (!data || !data._id || !description) {
            return;
        }

        const newData = {
            id: data._id,
            creatorId: data.creatorId,
            description: description,
            experience: timelineItems
        };

        updateAuthSkills(newData).then(() => {
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
