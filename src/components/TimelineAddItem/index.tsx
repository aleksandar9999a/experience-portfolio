import React from 'react';
import './styles.css';
import { Plus } from 'react-bootstrap-icons';
import ITimelineAddItem from '../../interfaces/ITimelineAddItem';
import { generateDateID } from '../../utils/utils';

function TimelineAddItem({ onClick }: ITimelineAddItem) {
    function addItem() {
        onClick({
            id: generateDateID(),
            title: '',
            desc: '',
            link: '',
            start: '',
            end: ''
        })
    }
    return (
        <li className="timeline-item">
            <div className="timeline-badge add" onClick={addItem}><Plus className="add-icon" /></div>
        </li>
    );
}

export default TimelineAddItem;
