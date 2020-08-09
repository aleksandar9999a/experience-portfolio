/**
 * External dependencies.
 */
import React, { useState, useEffect, SyntheticEvent } from 'react';

/**
 * Internal dependencies.
 */
import ITimelineItems from '../../interfaces/ITimelineItems';
import ISkills from '../../interfaces/ISkills';
import Timeline from '../../components/Timeline';
import LoadingPage from '../LoadingPage';
import { getAuthSkills, updateAuthSkills } from '../../services';

import './styles.css';


function SkillsSettings() {
    const [data, setData] = useState<ISkills>();
    const [description, setDescription] = useState<string>('');
    const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([{ id: 1, title: '', desc: '', link: '', }]);
    const [message, setMessage] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getAuthSkills()
            .then(data => {
                if (!data) {
                    Promise.reject(new Error('No information!'));
                    return;
                }

                setData(data);
                setDescription(data.description);
                setTimelineItems(data.experience);
            })
            .catch(err => {
                setMessage(err.message);
                removeMessage(3000);
            })
            .finally(() => setIsLoading(false))
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

        const newData: ISkills = {
            _id: data?._id,
            creatorId: data?.creatorId,
            description: description,
            experience: timelineItems
        };

        setIsLoading(true);
        updateAuthSkills(newData)
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
                <h1>Skills</h1>
            </div>
            <form className="skills-settings-form">
                <textarea
                    className="custom-textarea"
                    placeholder="Skills Resume"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <div className="skills-settings-timeline">
                    <Timeline
                        items={timelineItems}
                        isEditable={true}
                        onChange={handleTimelineChange}
                        onAdd={handleTimelineAdd}
                        onRemove={handleTimelineRemove}
                    />
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
