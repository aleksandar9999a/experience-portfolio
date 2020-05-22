import React from 'react';
import './About.css';
import Timeline from '../timeline/Timeline';

const aboutMe = `Hello, My name is Alexander Velichkov Todorov. I am a native of Ruse, Bulgaria, 22 years old. I have loved computer technology since I was a child and for this reason I am involved in programming.

I graduated in computer engineering and technology at PGEE "Apostol Arnaudov" in Ruse, and now I study programming at SoftUni, Sofia.

So far I have one second place and two first places in applied electronics competitions, as well as a few certificates, which you can see below.

There will be many more in the future!`;

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1 className="about-title-text">About me</h1>
      </div>
      <div className="about-headline">
        <p className="about-headline-text">{aboutMe}</p>
      </div>
      <div className="about-timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default About;
