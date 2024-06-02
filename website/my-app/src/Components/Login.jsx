import React, { useState } from 'react';
import Classes from '../Styles/Login.module.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login functionality here
    console.log('Login data submitted:', formData);
    // Example: Redirect to dashboard after successful login
    // Replace '/dashboard' with the desired URL
    window.location.href = '/dashboard';
  };

  return (
    <div className={Classes.loginContainer}>
      <h2 className={Classes.formTitle}>Welcome Back!</h2>
      <form onSubmit={handleSubmit} className={Classes.loginForm}>
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
        <button type="submit" className={Classes.loginButton}>Login</button>
        <div className={Classes.formFooter}>
          <span>Don't have an account? <a href="/signup">Sign Up</a></span>
        </div>
      </form>
    </div>
  );
}
