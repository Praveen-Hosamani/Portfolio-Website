import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [status, setStatus] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/manppare', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setShowMessage(true);
        form.reset();
      } else {
        setStatus('❌ Failed to send message. Please try again.');
        setShowMessage(true);
      }

      setTimeout(() => setShowMessage(false), 3500);
    } catch (error) {
      setStatus('⚠️ Network Error. Please check your connection.');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3500);
    }
  };

  return (
    <>
      {/* Modern top message */}
      {showMessage && (
        <div className="top-message">
          <p>{status}</p>
        </div>
      )}

      <div  id="Contact"  className="contact-container">
        <div className="main-contact">
          <div className="contact-image">
            <img src="/icons/email-message.png" alt="Contact Icon" />
          </div>

          <div className="contact-information" id="contact-2">
            <div className="contact-header">
              <h2>Contact Us</h2>
            </div>

            <form onSubmit={handleSubmit} className="inputs">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
