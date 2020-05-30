import React, { useState, SyntheticEvent, useEffect } from 'react';
import './Settings.css';
import { updateUserdata } from './../../services/db-user';
import { auth, getUserdata } from './../../services/db-auth';

function MainInformationSettings() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [devType, setDevType] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

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

    const handleFirstName = (event: any) => handleChange.bind(MainInformationSettings, 'firstName')(event);
    const handleLastName = (event: any) => handleChange.bind(MainInformationSettings, 'lastName')(event);
    const handleDevType = (event: any) => handleChange.bind(MainInformationSettings, 'devType')(event);

    return (
        <div className="settings-title-wrapper">
            <h1 className="settings-title">Main Information</h1>
            <form className="contact-form">
                <input className="custom-input" type="text" placeholder="First Name"
                    defaultValue={firstName} onChange={handleFirstName} />
                <input className="custom-input" type="text" placeholder="Last Name"
                    defaultValue={lastName} onChange={handleLastName} />
                <input className="custom-input" type="text" placeholder="Dev Type"
                    defaultValue={devType} onChange={handleDevType} />
                {error ? <p className="custom-error">{error}</p> : null}
                {success ? <p className="custom-success">{success}</p> : null}
                <div className="settings-submit-button-wrapper">
                    <button className="settings-submit-button" onClick={handleSubmit}>Update Main Information</button>
                </div>
            </form>
        </div>
    );
}

export default MainInformationSettings;
