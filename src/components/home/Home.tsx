import React, { useState, useEffect } from 'react';
import './Home.css';
import CustomLink from '../customLink/CustomLink';
import ContactI from '../../interfaces/ContactI';
import { getMainInfo } from '../../services/db';
import DBUserResponse from '../../interfaces/DBUserResponse';

const contacts: ContactI[] = [
    { alt: 'instagram', icon: 'instagram', href: 'https://www.instagram.com/sandi9999a/' },
    { alt: 'github', icon: 'git', href: 'https://github.com/aleksandar9999a' },
    { alt: 'linkedin', icon: 'linkedin', href: 'https://www.linkedin.com/in/alexandar-todorov/' }
]

const generateCustomLinks = (c: ContactI, i: number) => <CustomLink key={i} alt={c.alt} icon={c.icon} link={c.href} />;
const links = contacts.map(generateCustomLinks);


function Home() {
    const [info, setInfo] = useState({ firstName: '', lastName: '', devType: '' });

    useEffect(() => {
        const userdata = getMainInfo().subscribe(({ data }: { data: DBUserResponse }) => {
            setInfo(data)
        });
        return () => {
            userdata.unsubscribe();
        }
    }, [])

    return (
        <div className="home">
            <div className="headline">
                <h1 className="headline-top">
                    Hello friends,
                    <br />
                    My name is {info.firstName} {info.lastName}.
                </h1>
                <hr />
                <h2 className="headline-bottom">
                    {info.devType}
                </h2>
                <div className="social-contacts">
                    {links}
                </div>
            </div>
        </div>
    );
}

export default Home;
