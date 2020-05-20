import React from 'react';
import './Home.css';
import instagram from './../../assets/instagram.png';
import git from './../../assets/git.png';
import linkedin from './../../assets/linkedin.png';

const contacts = [
    { alt: 'instagram', src: instagram, href: 'https://www.instagram.com/sandi9999a/' },
    { alt: 'github', src: git, href: 'https://github.com/aleksandar9999a' },
    { alt: 'linkedin', src: linkedin, href: 'https://www.linkedin.com/in/alexandar-todorov/' }
]

const links = contacts.map((c, i) => (
    <a href={c.href} key={i} target="_blank" className="social-link">
        <img src={c.src} alt={c.alt} className="social-icons" />
    </a>
))

function Home() {
    return (
        <div className="home">
            <div className="headline">
                <h1 className="headline-top">
                    Hello friends,
                    <br />
                    My name is Alexandar Todorov.
                </h1>
                <hr />
                <h2 className="headline-bottom">
                    Front-End Developer
                </h2>
                <div className="social-contacts">
                    {links}
                </div>
            </div>
        </div>
    );
}

export default Home;
