import React, { useState, useRef, useEffect } from 'react';

import { FaRegUser, FaEnvelope } from 'react-icons/fa';
import './contact.scss';

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
      setSuccess(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [success]);

  async function handleSubmit(event) {
    event.preventDefault();
    setRequest(true);

    const requestContent = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    const response = await fetch('/contact', {
      method: 'POST',
      body: JSON.stringify(requestContent),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      setSuccess(true);
      setMessage('Message sent successfully');
      nameRef.current.value = '';
      emailRef.current.value = '';
      messageRef.current.value = '';
    } else {
      setMessage('There was an error sending the message');
    }
    setRequest(false);
  }

  return (
    <section className="contact-section">
      <div className="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <h2 className="has-text-centered title">Drop me a message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name" className="label">
              Your name
              <p className="control has-icons-left">
                <input
                  id="name"
                  name="name"
                  className="input"
                  type="text"
                  placeholder="Type your name here"
                  ref={nameRef}
                  required="required"
                />
                <span className="icon is-small is-left">
                  <FaRegUser />
                </span>
              </p>
            </label>
          </div>
          <div className="field">
            <label htmlFor="email" className="label">
              Your email address
              <p className="control has-icons-left">
                <input
                  id="email"
                  name="email"
                  className="input"
                  type="text"
                  placeholder="Type your email here"
                  ref={emailRef}
                  required="required"
                />
                <span className="icon is-small is-left">
                  <FaEnvelope />
                </span>
              </p>
            </label>
          </div>
          <label htmlFor="message" className="label">
            Type your message
            <textarea
              id="message"
              name="message"
              className="textarea"
              placeholder="Let's stay in touch!"
              ref={messageRef}
              required="required"
            />
          </label>
          {message && <p className={`${success ? 'has-text-success' : 'has-text-danger'}`}>{message}</p>}
          <div className="field mt-3">
            <div className="control">
              <button className={`button is-link ${request && 'is-loading'}`} type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
