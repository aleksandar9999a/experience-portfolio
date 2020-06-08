import React, { useState, useEffect } from 'react';
import './styles.css';
import CustomLink from '../../components/CustomLink';
import IContact from '../../interfaces/IContact';
import { Link } from 'react-router-dom';
import IMainUser from '../../interfaces/IMainUser';
import { getDefaultMainInfo } from '../../services';
import Error from '../../containers/Error';
import LoadingPage from '../LoadingPage';

const contacts: IContact[] = [
    { alt: 'instagram', icon: 'instagram', href: 'https://www.instagram.com/sandi9999a/' },
    { alt: 'github', icon: 'git', href: 'https://github.com/aleksandar9999a' },
    { alt: 'linkedin', icon: 'linkedin', href: 'https://www.linkedin.com/in/alexandar-todorov/' }
]

const generateCustomLinks = (c: IContact, i: number) => <CustomLink key={i} alt={c.alt} icon={c.icon} link={c.href} />;
const links = contacts.map(generateCustomLinks);

function Home() {
    const [info, setInfo] = useState<IMainUser>({ firstName: '', lastName: '', devType: '' });
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getDefaultMainInfo().then(({ data }: { data: IMainUser }) => {
            if (!data) { setError('No Data'); return; }
            setInfo(data)
        }).catch(err => {
            setError(err.message)
        }).finally(() => setIsLoading(false));
    }, [])

    if (isLoading) { return <LoadingPage /> }
    if (!!error) { return <Error title="Home" error={error} />; }

    return (
        <div className="container custom-container">
            <div className="custom-headline">
                <h1 className="custom-headline-top">
                    Hello friends,
                    <br />
                    My name is {info.firstName} {info.lastName}.
                </h1>
                <hr />
                <div className="custom-headline-bottom">
                    <h2 className="custom-headline-text">
                        {info.devType}
                    </h2>
                    <Link className="custom-headline-link" to='/login' >
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
