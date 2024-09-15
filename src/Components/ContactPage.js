import React, { useState } from 'react';

function ContactPage() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    // Optionally, reset the form fields
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="first_name" className="form-label">First Name</label>
        <input
          type="text"
          id="first_name"
          name="firstname"
          className="form-input"
          placeholder="Enter your first name"
          value={formData.firstname}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="last_name" className="form-label">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="lastname"
          className="form-input"
          placeholder="Enter your last name"
          value={formData.lastname}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea><br />

        <button type="submit" className="form-button">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
