import React, { useState, SyntheticEvent, useEffect } from 'react';
import { getUserdata, updateAuthUserdata } from '../../services';
import LoadingPage from '../LoadingPage';

function MainInfoSettings() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [devType, setDevType] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getUserdata()
            .then((user: any) => {
                if (!user) {
                    return;
                }

                setFirstName(user.firstName);
                setLastName(user.lastName);
                setDevType(user.devType);
            })
            .catch(err => {
                setMessage(err.message);
            })
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        const sub = setTimeout(() => {
            setMessage('');
        }, 3000)

        return () => {
            clearTimeout(sub);
        }
    }, [message])

    function handleChange(type: string, event: any) {
        const types = {
            firstName: setFirstName,
            lastName: setLastName,
            devType: setDevType
        }

        if (typeof (types as any)[type] === 'function') {
            (types as any)[type](event.target.value);
        }
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (firstName === '' || lastName === '' || devType === '') {
            setMessage('Invalid input!');
            return;
        }

        updateAuthUserdata({ firstName, lastName, devType })
            .then(() => {
                setMessage('Successful updated!');
            })
            .catch(err => {
                setMessage(err.message);
            });
    }

    const handleFirstName = (event: any) => handleChange('firstName', event);
    const handleLastName = (event: any) => handleChange('lastName', event);
    const handleDevType = (event: any) => handleChange('devType', event);

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Main Information</h1>
            </div>
            <form className="main-info-form">
                <input
                    className="custom-input"
                    type="text"
                    placeholder="First Name"
                    defaultValue={firstName}
                    onChange={handleFirstName}
                />
                <input
                    className="custom-input"
                    type="text"
                    placeholder="Last Name"
                    defaultValue={lastName}
                    onChange={handleLastName}
                />
                <input
                    className="custom-input"
                    type="text"
                    placeholder="Dev Type"
                    defaultValue={devType}
                    onChange={handleDevType}
                />
                <p className="custom-message">{message}</p>
                <div className="custom-btn-wrapper">
                    <button className="custom-btn" onClick={handleSubmit}>Update Main Information</button>
                </div>
            </form>
        </div>
    );
}

export default MainInfoSettings;
