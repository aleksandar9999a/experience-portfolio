/**
 * External dependencies.
 */
import React, { useEffect, useState, SyntheticEvent } from 'react';

/**
 * Internal dependencies.
 */
import IAbout from '../../interfaces/IAbout';
import ITimelineItems from '../../interfaces/ITimelineItems';
import Timeline from '../../components/Timeline';
import LoadingPage from '../LoadingPage';
import { getAuthAbout, upsertAuthAbout } from '../../services';

import './styles.css';


function AboutSettings() {
    const [data, setData] = useState<IAbout>();
    const [description, setDescription] = useState<string>('');
    const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([{ id: 1, title: '', desc: '', link: '', }]);
    const [message, setMessage] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getAuthAbout()
            .then(data => {
                if (!data) {
                    Promise.reject(new Error('No information!'));
                    return;
                }

                setData(data);
                setDescription(data.description);
                setTimelineItems(data.courses);
            })
            .catch((err: Error) => {
                setMessage(err.message);
                removeMessage(3000);
            })
            .finally(() => setIsLoading(false));
    }, [])

    function handleDescriptionChange(e: any) {
        setDescription(e.target.value);
    }

    function handleTimelineChange(item: ITimelineItems) {
        let itemsCopy = [...timelineItems];
        const index = itemsCopy.findIndex(x => x.id === item.id);
        itemsCopy[index] = item;
        setTimelineItems(itemsCopy);
    }

    function handleTimelineAdd(item: ITimelineItems) {
        setTimelineItems([...timelineItems, item]);
    }

    function handleTimelineRemove(item: ITimelineItems) {
        const index = timelineItems.findIndex(x => x.id === item.id);
        setTimelineItems([...timelineItems.slice(0, index), ...timelineItems.slice(index + 1)]);
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
        if (!dataValidation()) {
            return;
        }

        const newData = {
            _id: data?._id,
            creatorId: data?.creatorId,
            description: description,
            courses: timelineItems
        };

        setIsLoading(true);
        upsertAuthAbout(newData)
            .then(() => {
                setMessage('Successful updated!');
                removeMessage(3000);
            })
            .catch((err: Error) => {
                setMessage('Something is wrong!');
                removeMessage(3000);
            })
            .finally(() => setIsLoading(false));
    }

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="container">
            <div className="title">
                <h1>About</h1>
            </div>
            <form className="about-settings-form">
                <textarea
                    className="custom-textarea"
                    placeholder="About me"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <div className="about-settings-timeline">
                    <Timeline
                        items={timelineItems}
                        isEditable={true}
                        onChange={handleTimelineChange}
                        onAdd={handleTimelineAdd}
                        onRemove={handleTimelineRemove}
                    />
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
