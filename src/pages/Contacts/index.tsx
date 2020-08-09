/**
 * External dependencies.
 */
import React, { useState, SyntheticEvent, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';

/**
 * Internal dependencies.
 */
import Loader from '../../components/Loader';
import { sendEmail } from '../../services';

function Contacts() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [mes, setMes] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (mes === 'Successful sended!') {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }

    const sub = setTimeout(() => {
      setMes('');
    }, 3000);

    return () => {
      clearTimeout(sub);
    }
  }, [mes])

  function handleChange(type: string, text: string) {
    const types = {
      name: setName,
      email: setEmail,
      subject: setSubject,
      message: setMessage,
    }

    if (typeof (types as any)[type] === 'function') {
      (types as any)[type](text);
    }
  }

  const handleName = (e: any) => handleChange('name', e.target.value);
  const handleEmail = (e: any) => handleChange('email', e.target.value);
  const handleSubject = (e: any) => handleChange('subject', e.target.value);
  const handleMessage = (e: any) => handleChange('message', e.target.value);

  function validateInput() {
    if (!name || name.length < 4) {
      setMes('Invalid Name - min length is 4 chars!');
      return false;
    }
    if (!isEmail(email)) {
      setMes('Invalid email!');
      return false;
    }
    if (!subject || subject.length < 4 || subject.length > 50) {
      setMes('Invalid Name - min length is 4 chars, max - 50!');
      return false;
    }
    if (!message || message.length < 4 || message.length > 300) {
      setMes('Invalid message - min length is 4 chars, max - 300!');
      return false;
    }
    return true;
  }

  function submit(e: SyntheticEvent) {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }

    setIsLoading(true);
    sendEmail({ name, email, subject, message })
      .then(() => setMes('Successful sended!'))
      .catch(err => setMes(err.message))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="container">
      <div className="title">
        <h1>Contact with me!</h1>
      </div>
      <form className="contact-form">
        <input
          className="custom-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
        />
        <input
          className="custom-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <input
          className="custom-input"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={handleSubject}
        />
        <textarea
          className="custom-textarea"
          placeholder="Message"
          value={message}
          onChange={handleMessage}
        />
        <p className="custom-message">{mes}</p>
        <div className="custom-btn-wrapper">
          {isLoading
            ? <Loader />
            : <button className="custom-btn" onClick={submit}>Send</button>
          }
        </div>
      </form>
    </div>
  );
}

export default Contacts;
