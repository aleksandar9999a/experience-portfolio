import React from 'react';
import './Contacts.css';

function Contacts() {
  return (
    <div className="contacts">
      <div className="title">
        <h1 className="title-text">Contact with me!</h1>
      </div>
      <form className="contact-form">
        <input className="custom-input" type="text" placeholder="Name"/>
        <input className="custom-input" type="email" placeholder="Email"/>
        <input className="custom-input" type="text" placeholder="Subject"/>
        <textarea className="custom-textarea" placeholder="Message"/>
        <button className="custom-button">Send</button>
      </form>
    </div>
  );
}

export default Contacts;
