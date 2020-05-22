import React from 'react';
import './Timeline.css';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';

const timelineItems: TimelineItemsInterface[] = [
    {
        title: 'Programming Basics',
        desc: 'The "Programming Basics" with C# course, giving basic programming skills',
        link: 'https://softuni.bg/certificates/details/66066/7576994f',
        start: '09/03/2019',
        end: '22/04/2019'
    },
    {
        title: 'JS Fundamentals',
        desc: 'The Programming Fundamentals course expands the acquired basic skills for writing program code and introduces basic techniques and tools.',
        link: 'https://softuni.bg/certificates/details/69128/95352670',
        start: '13/05/2019',
        end: '04/08/2019'
    },
    {
        title: 'JS Advanced',
        desc: 'The course studies more complex concepts such as function context, explicit binding, event loop, develops algorithmic thinking, DOM tree. The functional and OOP approaches to JavaScript programming are considered. Concepts such as inheritance, object composition and prototype chain are studied.',
        link: 'https://softuni.bg/certificates/details/72313/f49edb7e',
        start: '16/09/2019',
        end: '28/10/2019'
    },
    {
        title: 'JS Applications',
        desc: 'The course studies HTTP requests, REST Services, what are databases and how to work with them, what is asynchronous code, Templating and Routing.',
        link: 'https://softuni.bg/certificates/details/75080/da70578e',
        start: '28/10/2019',
        end: '08/12/2019'
    },
    {
        title: 'Angular',
        desc: 'The course teaches and TypeScript, also Architectural templates for SPA applications, components, directives, etc.',
        link: 'https://softuni.bg/certificates/details/77680/b0c21034',
        start: '14/01/2020',
        end: '15/04/2020'
    },
    {
        title: 'VueJS',
        desc: 'Building Single Page Applications with VueJS technology.',
        link: 'https://softuni.bg/certificates/details/80666/7093bcca',
        start: '06/03/2020',
        end: '17/04/2020'
    }
]

const generateItems = (item: TimelineItemsInterface, i: number) => (
    <li className="timeline-item" key={i}>
        <a href={item.link} target="_blank" className="timeline-link" rel="noopener noreferrer">
            <div className="timeline-badge" />
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">{item.title}</h4>
                </div>
                <div className="timeline-body">
                    <p className="timeline-text">{item.desc}</p>
                </div>
                <div className="timeline-time">
                    {item.start ? <p className="timeline-start">Start: <span className="timeline-date">{item.start}</span></p> : null}
                    {item.end ? <p className="timeline-end">End: <span className="timeline-date">{item.end}</span></p> : null}
                </div>
            </div>
        </a>
    </li>
)
const listOfItems = timelineItems.map(generateItems);

function Timeline() {
    return (
        <ul className="timeline">
            {listOfItems}
        </ul>
    );
}

export default Timeline;
