import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { client } from '../../client';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Contact <span>Me</span></h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:vidhisahai26april@gmail.com" className="p-text">E-mail</a>
        </div>
        <div className="app__contact-card ">
          <img src={images.github} alt="github" />
          <a href="https://github.com/Vidhi2604" className="p-text">GitHUb</a>
        </div>
        <div className="app__contact-card">
          <img src={images.linkedin} alt="linkedin" />
          <a href="https://linkedin.com/in/vidhi-sahai" className="p-text">Linkedin</a>
        </div>
        <div className="app__contact-card">
          <img src={images.twitter} alt="twitter" />
          <a href="https://twitter.com/SahaiVidhi" className="p-text">Twitter</a>
        </div>
        <div className="app__contact-card">
          <img src={images.instagram} alt="instagram" />
          <a href="https://instagram.com/sahaividhi" className="p-text">Instagram</a>
        </div>
      </div>
      <p1> Or send Me your message directly :)</p1>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Contact, 'contact');
