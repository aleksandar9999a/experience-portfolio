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
        const generateItems = (item: TimelineItemsInterface) => (<TimelineItem item={item} id={item.id} key={item.id.toString()} isEditable={isEditable} onChange={handleChange} onRemove={handleRemove} />)
        if (onChange) { onChange(items); }
        setList(items.map(generateItems));
    }

    function handleChange(data: TimelineItemsInterface) {
        const newItems = [...items];
        const index = newItems.findIndex(item => item.id === data.id);
        newItems[index] = data;
        setItems(newItems);
    }

    function handleAddItem(data: TimelineItemsInterface) {
        const newItems = [...items];
        let id = 1;
        if (items.length > 0) { id = items[items.length - 1].id + 1; }
        data.id = id;
        newItems.push(data);
        setItems(newItems);
    }

    function handleRemove(id: number) {
        setItems(items.filter(x => x.id !== id));
    }

    return (
        <ul className="timeline">
            {list}
            {isEditable ? <TimelineAddItem onClick={handleAddItem} /> : null}
        </ul>
    );
}

export default Timeline;
