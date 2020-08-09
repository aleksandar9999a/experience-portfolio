/**
 * External dependencies.
 */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import contacts from '../../configs/contacts';
import IContact from '../../interfaces/IContact';
import IMainUser from '../../interfaces/IMainUser';
import CustomLink from '../../components/CustomLink';
import ErrorPage from './../ErrorPage';
import LoadingPage from './../LoadingPage';
import { getDefaultMainInfo } from '../../services';
import './styles.css';


function Home() {
    const [info, setInfo] = useState<IMainUser>({ firstName: '', lastName: '', devType: '' });
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getDefaultMainInfo()
            .then(data => {
                if (!data) {
                    Promise.reject(new Error('No Data'));
                    return;
                }
                setInfo(data);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setIsLoading(false));
    }, [])

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!!error) {
        return <ErrorPage title="Home" error={error} />;
    }

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
                    {contacts.map((c: IContact, i: number) => {
                        return <CustomLink
                            key={i}
                            alt={c.alt}
                            icon={c.icon}
                            link={c.href}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
