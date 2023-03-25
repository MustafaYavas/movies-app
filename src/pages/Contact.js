import { useState } from 'react';

import styles from './Contact.module.scss';
import contact from '../assets/contact.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    phone: '',
    email: '',
    message: '',
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ first: '', last: '', phone: '', email: '', message: '' });

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, [2000]);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={styles['contact-container']}
      style={{
        backgroundImage: `${`linear-gradient(to bottom, rgba(8, 27, 39, .1), rgba(8, 27, 39, 1))`}, 
        url(${contact})`,
      }}
    >
      <h1>DON'T FORGET TO SAY HEY!</h1>

      <div className={styles['contact-subtitle']}>
        <p>Send Us</p>
        <p>An Email.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={`${styles['input-container']} row mt-5`}>
          <input
            className="col-12 col-md-3"
            type="text"
            placeholder="Your first name*"
            required
            name="first"
            value={formData.first}
            onChange={(e) => handleFormChange(e)}
          />
          <div className="col-12 col-md-1"></div>
          <input
            className="col-12 col-md-3"
            type="text"
            placeholder="Your last name"
            name="last"
            value={formData.last}
            onChange={(e) => handleFormChange(e)}
          />
        </div>

        <div className={`${styles['input-container']} row`}>
          <input
            className="col-12 col-md-3"
            type="tel"
            placeholder="Enter phone number"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleFormChange(e)}
          />
          <div className="col-12 col-md-1"></div>
          <input
            className="col-12 col-md-3"
            type="email"
            placeholder="Enter your email*"
            required
            name="email"
            value={formData.email}
            onChange={(e) => handleFormChange(e)}
          />
        </div>

        <div className={`${styles['input-container']} row`}>
          <textarea
            placeholder="What do you want to say?*"
            rows="4"
            cols="50"
            className="col-12 col-md-7"
            type="textarea"
            required
            name="message"
            value={formData.message}
            onChange={(e) => handleFormChange(e)}
          />
        </div>

        <div className="d-flex align-items-center">
          <button type="submit" className={styles['contact-button']}>
            SEND EMAIL
          </button>
          {showMessage && (
            <p className={styles['contact-thanks']}>Thank you!</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
