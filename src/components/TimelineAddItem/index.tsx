/**
 * External dependencies.
 */
import React from 'react';
import { Plus } from 'react-bootstrap-icons';

/**
 * Internal dependencies.
 */
import ITimelineAddItem from '../../interfaces/ITimelineAddItem';
import { generateDateID } from '../../utils/utils';

import './styles.css';

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
