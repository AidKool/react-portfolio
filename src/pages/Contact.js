import React from 'react';

import { FaRegUser, FaEnvelope } from 'react-icons/fa';
import '../assets/scss/contact.scss';

function Contact() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === 'username') {
      return setUsername(value);
    }
    if (name === 'email') {
      return setEmail(value);
    }
    return setMessage(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('name:', username);
    console.log('email:', email);
    console.log('message:', message);
    setUsername('');
    setEmail('');
    setMessage('');
  }

  return (
    <section className="contact-section mx-auto is-flex is-align-items-center">
      <div className="container">
        <h2 className="has-text-centered title">Drop me a message!</h2>
        <form className="contact-form mx-auto" onSubmit={handleSubmit}>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </label>
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
