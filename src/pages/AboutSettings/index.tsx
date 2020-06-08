import React, { useEffect, useState, SyntheticEvent } from 'react';
import './styles.css';
import ITimelineItems from '../../interfaces/ITimelineItems';
import Timeline from '../../components/Timeline';
import IAbout from '../../interfaces/IAbout';
import { getAuthAbout, updateAuthAbout } from '../../services';
import LoadingPage from '../LoadingPage';

function AboutSettings() {
    const [data, setData] = useState<IAbout>();
    const [description, setDescription] = useState<string>();
    const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([{ id: 1, title: '', desc: '', link: '', }]);
    const [message, setMessage] = useState<string>();
    const [isLoading, setIsLoding] = useState<boolean>(true);

    useEffect(() => {
        getAuthAbout().then(({ data }: { data: IAbout }) => {
            if (data) {
                setData(data);
                setDescription(data.description);
                setTimelineItems(data.courses);
            } else {
                setMessage('No information');
            }
        }).catch(err => {
            setMessage(err.message);
            removeMessage(3000);
        }).finally(() => setIsLoding(false));
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
        if (!data || !data._id || !description) { setMessage('Input data is incorrect format!'); return; }

        const newData = {
            id: data._id,
            creatorId: data.creatorId,
            description: description,
            courses: timelineItems
        };

        setIsLoding(true);
        updateAuthAbout(newData).then(() => {
            setMessage('Successful updated!');
            removeMessage(3000);
        }).catch(err => {
            setMessage('Something is wrong!');
            removeMessage(3000);
        }).finally(() => setIsLoding(false));
    }

    if (isLoading) { return <LoadingPage />; }

    return (
        <div className="container">
            <div className="title">
                <h1>About</h1>
            </div>
            <form className="about-settings-form">
                <textarea className="custom-textarea" placeholder="About me"
                    value={description} onChange={handleDescriptionChange} />
                <div className="about-settings-timeline">
                    <Timeline items={timelineItems} isEditable={true} onChange={handleTimelineChange} />
                </div>
                <p className="about-settings-message">{message}</p>
                <div className="custom-btn-wrapper">
                    <button className="custom-btn" onClick={handleSubmit}>Update</button>
                </div>
            </form>
        </div>
    );
}

export default AboutSettings;
