import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/global.css';
import backgroundImage from '../assets/Background.gif';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!newPassword || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // For now, just show success and redirect to login
    alert('Password changed successfully!');
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
        <div className="change-password-card">
          <h1>Change Password</h1>
          <p className="change-password-subtitle">
            Please enter the required credentials
          </p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-input"
                placeholder="• • • • • •"
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
                placeholder="• • • • • •"
                required
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              className="confirm-password-button"
              style={{
                backgroundColor: '#FFD700',
                color: 'black',
                width: '100%',
                padding: '0.8rem',
                fontWeight: 'bold'
              }}
            >
              CONFIRM PASSWORD
            </Button>

            <div className="signup-prompt">
              Don't have an account? <a href="/register" className="signup-link">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
