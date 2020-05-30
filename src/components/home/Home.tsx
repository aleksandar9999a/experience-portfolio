import React, { useState, useEffect } from 'react';
import './Home.css';
import CustomLink from '../customLink/CustomLink';
import ContactI from '../../interfaces/ContactI';
import { getMainInfo } from '../../services/db-defaults';
import { Link } from 'react-router-dom';

const contacts: ContactI[] = [
    { alt: 'instagram', icon: 'instagram', href: 'https://www.instagram.com/sandi9999a/' },
    { alt: 'github', icon: 'git', href: 'https://github.com/aleksandar9999a' },
    { alt: 'linkedin', icon: 'linkedin', href: 'https://www.linkedin.com/in/alexandar-todorov/' }
]

const generateCustomLinks = (c: ContactI, i: number) => <CustomLink key={i} alt={c.alt} icon={c.icon} link={c.href} />;
const links = contacts.map(generateCustomLinks);


function Home() {
    const [info, setInfo] = useState<any>({ firstName: '', lastName: '', devType: '' });

    useEffect(() => {
        const userdata = getMainInfo().subscribe(data => {
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
                <div className="headline-bottom">
                    <h2 className="headline-text">
                        {info.devType}
                    </h2>
                    <Link className="headline-link" to='/login' >
                        Are you my owner?
                    </Link>
                </div>
                <div className="social-contacts">
                    {links}
                </div>
            </div>
        </div>
    );
}

export default Home;
