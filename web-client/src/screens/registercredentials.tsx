import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/global.css';
import backgroundImage from '../assets/Background.gif';

const RegisterCredentials = () => {
  const navigate = useNavigate();
  const selectedRole = sessionStorage.getItem('selectedRole');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // For now, just redirect to login since we don't have a database
    navigate('/login');
  };

  return (
    <div className="background-container">
      <img 
        src={backgroundImage}
        alt="Background" 
        className="background-image"
      />
      <div className="background-overlay" />
      <div className="content-container">
        <div className="register-credentials-card">
          <h1>Create Your Account</h1>
          <p className="register-credentials-subtitle">
            Please enter your username, email, and password to continue
          </p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="John Smith"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Email address:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="esteban_schiller@gmail.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              className="signup-button"
              style={{
                backgroundColor: '#FFD700',
                color: 'black',
                width: '100%',
                padding: '0.8rem',
                fontWeight: 'bold'
              }}
            >
              SIGN UP
            </Button>

            <div className="login-prompt">
              Already have an account? <a href="/login" className="login-link">Sign In</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCredentials;
