import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/global.css';
import backgroundImage from '../assets/Background.gif';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(0);

  // Test credentials (for development only)
  const TEST_EMAIL = 'test@example.com';
  const TEST_OTP = '123456';

  const startCountdown = () => {
    setCountdown(59);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResendCode = () => {
    // In a real app, this would trigger the OTP sending process
    alert('New OTP code sent! (For testing, use: 123456)');
    startCountdown();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !otp) {
      alert('Please fill in all fields');
      return;
    }

    // Test validation (for development only)
    if (email === TEST_EMAIL && otp === TEST_OTP) {
      navigate('/changepassword'); // We'll create this route later
    } else {
      alert('Invalid email or OTP code. Please try again.\n\nFor testing, use:\nEmail: test@example.com\nOTP: 123456');
    }
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
        <div className="forgot-password-card">
          <h1>Forgot Password</h1>
          <p className="forgot-password-subtitle">
            Please enter the required credentials
          </p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email address:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="esteban_schiller@gmail.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Enter OTP (One Time Password)</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-input"
                placeholder="• • • • • •"
                maxLength={6}
                required
              />
            </div>

            <div 
              className="resend-code"
              onClick={handleResendCode}
            >
              {countdown > 0 ? `RESEND CODE 0:${countdown.toString().padStart(2, '0')}` : 'RESEND CODE 0:59'}
            </div>

            <Button
              type="submit"
              variant="contained"
              className="enter-code-button"
              style={{
                backgroundColor: '#FFD700',
                color: 'black',
                width: '100%',
                padding: '0.8rem',
                fontWeight: 'bold'
              }}
            >
              ENTER CODE
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

export default ForgetPassword;
