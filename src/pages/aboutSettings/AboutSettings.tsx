import React, { useEffect, useState, SyntheticEvent } from 'react';
import './AboutSettings.css';
import { getAbout, updateAbout } from '../../services/db-user';
import ITimelineItems from '../../interfaces/ITimelineItems';
import Timeline from '../../components/timeline/Timeline';
import IAbout from '../../interfaces/IAbout';

function AboutSettings() {
    const [data, setData] = useState<any>();
    const [description, setDescription] = useState<string>();
    const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([]);
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        getAbout().then(({ data }: { data: IAbout }) => {
            setData(data);
            setDescription(data.description);
            setTimelineItems(data.courses);
        }).catch(err => {
            setMessage(err.message);
            removeMessage(3000);
        });
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
        <div className="about-settings-title-wrapper">
            <h1 className="about-settings-title">About</h1>
            <form className="about-settings-form">
                <textarea className="custom-textarea" placeholder="About me"
                    value={description} onChange={handleDescriptionChange} />
                <div className="about-settings-timeline">
                    {timelineItems.length > 0
                        ? <Timeline items={timelineItems} isEditable={true} onChange={handleTimelineChange} />
                        : null}
                </div>
                <p className="about-settings-message">{message}</p>
                <div className="about-settings-submit-button-wrapper">
                    <button className="about-settings-submit-button" onClick={handleSubmit}>Update</button>
                </div>
            </form>
        </div>
    );
}

export default AboutSettings;
