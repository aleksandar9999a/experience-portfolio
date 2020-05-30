import React from 'react';
import './Timeline.css';
import { Plus } from 'react-bootstrap-icons';

function TimelineAddItem(props: { onClick: Function }) {
    const onClick = props.onClick;
    function addItem() {
        onClick({
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
