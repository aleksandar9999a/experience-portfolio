import React, { useState, SyntheticEvent, useEffect } from 'react';
import './Settings.css';
import { updateUserdata } from './../../services/db-user';
import { auth, getUserdata } from './../../services/db-auth';

function MainInformationSettings() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [devType, setDevType] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        getUserdata();
        const userdata = auth.subscribe(user => {
            if (user) {
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setDevType(user.devType);
            }
        })
        return () => userdata.unsubscribe();
    }, []);

    function handleChange(type: string, event: any) {
        const value = event.target.value
        if (type === 'firstName') {
            setFirstName(value);
            return;
        }
        if (type === 'lastName') {
            setLastName(value);
            return;
        }
        if (type === 'devType') {
            setDevType(value);
            return;
        }
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (firstName === '' || lastName === '' || devType === '') {
            setError('Invalid input!');
            removeErrorAfterTime(3000);
            return;
        }

        updateUserdata({ firstName, lastName, devType }).then(user => {
            setSuccess('Successful updated!');
            removeSuccessAfterTime(3000);
        }).catch(err => {
            setError(err.message);
            removeErrorAfterTime(3000);
        });
    }

    function removeErrorAfterTime(time: number) {
        return removeText(setError, 3000);
    }

    function removeSuccessAfterTime(time: number) {
        return removeText(setSuccess, 3000);
    }

    function removeText(setValue: Function, time: number) {
        return setTimeout(() => {
            setValue('');
        }, time);
    }

    return (
        <div className="settings-title-wrapper">
            <h1 className="settings-title">Main Information</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input className="custom-input" type="text" placeholder="First Name"
                    value={firstName} onChange={handleChange.bind(MainInformationSettings, 'firstName')} />
                <input className="custom-input" type="text" placeholder="Last Name"
                    value={lastName} onChange={handleChange.bind(MainInformationSettings, 'lastName')} />
                <input className="custom-input" type="text" placeholder="Dev Type"
                    value={devType} onChange={handleChange.bind(MainInformationSettings, 'devType')} />
                {error ? <p className="custom-error">{error}</p> : null}
                {success ? <p className="custom-success">{success}</p> : null}
                <div className="settings-submit-button-wrapper">
                    <button className="settings-submit-button">Update Main Information</button>
                </div>
            </form>
        </div>
    );
}

export default MainInformationSettings;
