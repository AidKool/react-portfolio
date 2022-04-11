import React from 'react';

import { FaRegUser, FaEnvelope } from 'react-icons/fa';
import './contact.scss';

import validateEmail from '../../utils/validateEmail';

function Contact() {
  const [formState, setFormState] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState('');

  function handleBlur(event) {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);

      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else if (!event.target.value.length) {
      setErrorMessage(`${event.target.name} is required`);
    } else {
      setErrorMessage('');
    }

    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage('Message sent');
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
                  id="username"
                  name="username"
                  className="input"
                  type="text"
                  placeholder="Type your name here"
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
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
              onBlur={handleBlur}
            />
          </label>
          {errorMessage && <p className="form-message">{errorMessage}</p>}
          <div className="field mt-3">
            <div className="control">
              <button className="button is-link" type="submit">
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
