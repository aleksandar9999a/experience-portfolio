import React, { useState, SyntheticEvent, useEffect } from 'react';
import './styles.css';
import { getUserdata, updateAuthUserdata } from '../../services';

function MainInfoSettings() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [devType, setDevType] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    useEffect(() => {
        getUserdata().then((user: any) => {
            if (user) {
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setDevType(user.devType);
            }
        }).catch(err => {
            setError(err.message);
            removeErrorAfterTime(3000);
        });
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

        updateAuthUserdata({ firstName, lastName, devType }).then(() => {
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

    const handleFirstName = (event: any) => handleChange.bind(MainInfoSettings, 'firstName')(event);
    const handleLastName = (event: any) => handleChange.bind(MainInfoSettings, 'lastName')(event);
    const handleDevType = (event: any) => handleChange.bind(MainInfoSettings, 'devType')(event);

    return (
        <div className="main-settings-title-wrapper">
            <h1 className="main-settings-title">Main Information</h1>
            <form className="main-info-form">
                <input className="custom-input" type="text" placeholder="First Name"
                    defaultValue={firstName} onChange={handleFirstName} />
                <input className="custom-input" type="text" placeholder="Last Name"
                    defaultValue={lastName} onChange={handleLastName} />
                <input className="custom-input" type="text" placeholder="Dev Type"
                    defaultValue={devType} onChange={handleDevType} />
                {error ? <p className="custom-error">{error}</p> : null}
                {success ? <p className="custom-success">{success}</p> : null}
                <div className="main-settings-submit-button-wrapper">
                    <button className="main-settings-submit-button" onClick={handleSubmit}>Update Main Information</button>
                </div>
            </form>
        </div>
    );
}

export default MainInfoSettings;
