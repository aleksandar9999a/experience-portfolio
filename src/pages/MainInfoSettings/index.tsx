import React, { useState, SyntheticEvent, useEffect } from 'react';
import { getUserdata, updateAuthUserdata } from '../../services';
import LoadingPage from '../LoadingPage';

function MainInfoSettings() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [devType, setDevType] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getUserdata().then((user: any) => {
            if (user) {
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setDevType(user.devType);
            }
        }).catch(err => {
            setError(err.message);
        }).finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        removeText(setError, 3000);
    }, [error])

    useEffect(() => {
        removeText(setSuccess, 3000);
    }, [success])

    function handleChange(type: string, event: any) {
        const value = event.target.value
        if (type === 'firstName') { setFirstName(value); return; }
        if (type === 'lastName') { setLastName(value); return; }
        if (type === 'devType') { setDevType(value); return; }
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (firstName === '' || lastName === '' || devType === '') {
            setError('Invalid input!');
            return;
        }

        updateAuthUserdata({ firstName, lastName, devType }).then(() => {
            setSuccess('Successful updated!');
        }).catch(err => {
            setError(err.message);
        });
    }

    function removeText(setValue: Function, time: number) {
        return setTimeout(() => {
            setValue('');
        }, time);
    }

    const handleFirstName = (event: any) => handleChange('firstName', event);
    const handleLastName = (event: any) => handleChange('lastName', event);
    const handleDevType = (event: any) => handleChange('devType', event);

    if (isLoading) { return <LoadingPage />; }
    return (
        <div className="container">
            <div className="title">
                <h1>Main Information</h1>
            </div>
            <form className="main-info-form">
                <input className="custom-input" type="text" placeholder="First Name"
                    defaultValue={firstName} onChange={handleFirstName} />
                <input className="custom-input" type="text" placeholder="Last Name"
                    defaultValue={lastName} onChange={handleLastName} />
                <input className="custom-input" type="text" placeholder="Dev Type"
                    defaultValue={devType} onChange={handleDevType} />
                {error ? <p className="custom-error">{error}</p> : null}
                {success ? <p className="custom-success">{success}</p> : null}
                <div className="custom-btn-wrapper">
                    <button className="custom-btn" onClick={handleSubmit}>Update Main Information</button>
                </div>
            </form>
        </div>
    );
}

export default MainInfoSettings;
