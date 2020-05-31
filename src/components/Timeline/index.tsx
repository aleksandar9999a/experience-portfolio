import React, { useState, useEffect } from 'react';
import './styles.css';
import ITimelineItems from '../../interfaces/ITimelineItems';
import TimelineItem from '../TimelineItem';
import TimelineAddItem from '../TimelineAddItem';
import ITimeline from '../../interfaces/ITimeline';


function Timeline({ items, isEditable, onChange }: ITimeline) {
    let [currItems, setCurrItems] = useState([...items]);
    let [list, setList] = useState<JSX.Element[]>([]);

    useEffect(updateList, [currItems])

    function updateList() {
        const generateItems = (item: ITimelineItems) => (<TimelineItem item={item} id={item.id} key={item.id.toString()} isEditable={isEditable} onChange={handleChange} onRemove={handleRemove} />)
        if (onChange) { onChange(currItems); }
        setList(currItems.map(generateItems));
    }

    function handleChange(data: ITimelineItems) {
        const newItems = [...currItems];
        const index = newItems.findIndex(item => item.id === data.id);
        newItems[index] = data;
        setCurrItems(newItems);
    }

    function handleAddItem(data: ITimelineItems) {
        const newItems = [...currItems];
        let id = 1;
        if (currItems.length > 0) { id = currItems[items.length - 1].id + 1; }
        data.id = id;
        newItems.push(data);
        setCurrItems(newItems);
    }

    function handleRemove(id: number) {
        setCurrItems(currItems.filter(x => x.id !== id));
    }

    return (
        <ul className="timeline">
            {list}
            {isEditable ? <TimelineAddItem onClick={handleAddItem} /> : null}
        </ul>
    );
}

export default Timeline;
