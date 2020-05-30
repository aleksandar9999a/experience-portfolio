import React, { useState, useEffect } from 'react';
import './Timeline.css';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';
import TimelineItem from './TimelineItem';
import TimelineAddItem from './TimelineAddItem';


function Timeline(props: { items: TimelineItemsInterface[], isEditable?: boolean, onChange?: Function }) {
    const isEditable = props.isEditable || false;
    const onChange = props.onChange;
    let [items, setItems] = useState([...props.items]);
    let [list, setList] = useState<JSX.Element[]>([]);

    useEffect(updateList, [items])

    function updateList() {
        const generateItems = (item: TimelineItemsInterface) => (<TimelineItem item={item} id={item.id} key={item.id.toString()} isEditable={isEditable} onSubmit={handleSubmit} onRemove={handleRemove} />)
        setList(items.map(generateItems));
    }

    function handleSubmit(data: TimelineItemsInterface) {
        const newItems = [...items];
        if (data.id === undefined) {
            let id = 1;
            if (items.length > 0) {
                id = items[items.length - 1].id + 1
            }
            data.id = id;
            newItems.push(data);
        } else {
            newItems[data.id] = data;
        }
        if (onChange) { onChange(newItems); }
        setItems(newItems);
    }

    function handleRemove(id: number) {
        setItems(items.filter(x => x.id !== id));
    }

    return (
        <ul className="timeline">
            {list}
            {isEditable ? <TimelineAddItem onClick={handleSubmit} /> : null}
        </ul>
    );
}

export default Timeline;
