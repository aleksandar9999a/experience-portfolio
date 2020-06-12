import React, { useState, useEffect, SyntheticEvent } from 'react';
import './styles.css';
import ITimelineItems from '../../interfaces/ITimelineItems';
import Timeline from '../../components/Timeline';
import ISkills from '../../interfaces/ISkills';
import { getAuthSkills, updateAuthSkills } from '../../services';
import LoadingPage from '../LoadingPage';

function SkillsSettings() {
    const [description, setDescription] = useState<string>('');
    const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([{ id: 1, title: '', desc: '', link: '', }]);
    const [data, setData] = useState<ISkills>();
    const [message, setMessage] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
        }).finally(() => setIsLoading(false))
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

    function dataValidation() {
        if (!description || description.length < 4) {
            setMessage('Invalid Description. Minimum length is 4 chars!');
            return false;
        }
        if (!timelineItems || timelineItems.length < 1) {
            setMessage('Invalid Experience. Minimum length is 1 item!');
            return false;
        }
        return true;
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (!dataValidation()) { return; }

        let newData: ISkills = {
            _id: data?._id,
            creatorId: data?.creatorId,
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

    if (isLoading) { return <LoadingPage />; }

    return (
        <div className="container">
            <div className="title">
                <h1>Skills</h1>
            </div>
            <form className="skills-settings-form">
                <textarea className="custom-textarea" placeholder="Skills Resume"
                    value={description} onChange={handleDescriptionChange} />
                <div className="skills-settings-timeline">
                    < Timeline items={timelineItems} isEditable={true} onChange={handleTimelineChange} />
                </div>
                <p className="skills-settings-message">{message}</p>
                <div className="custom-btn-wrapper">
                    <button className="custom-btn" onClick={handleSubmit}>Update Skills</button>
                </div>
            </form>
        </div>
    );
}

export default SkillsSettings;
