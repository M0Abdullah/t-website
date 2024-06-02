import React, { useState } from 'react';
import Classes from '../Styles/SignUp.module.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Custom functionality here
    alert('Sign up successful!');

    // Example of setting a state to indicate the form has been submitted
    setSubmitted(true);
  };

  return (
    <div className={Classes.signUpContainer}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className={Classes.signUpForm}>
        <div className={Classes.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={Classes.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={Classes.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={Classes.signUpButton}>Sign Up</button>
      </form>
      {submitted && <p className={Classes.successMessage}>Thank you for signing up!</p>}
    </div>
  );
}
