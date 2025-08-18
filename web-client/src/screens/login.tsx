import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../styles/global.css';
import backgroundImage from '../assets/Background.gif';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  // Test credentials (for development only)
  const TEST_EMAIL = 'test@example.com';
  const TEST_PASSWORD = '123123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic test authentication
    if (email === TEST_EMAIL && password === TEST_PASSWORD) {
      navigate('/modulecreator-dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
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
        <div className="login-card">
          <h1>Sign In to Account</h1>
          <p className="login-subtitle">Please enter your email and password to continue</p>
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email address:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <div className="password-header">
                <label>Password</label>
                <a href="/forgetpassword" className="forgetpassword">Forget Password?</a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberPassword}
                  onChange={(e) => setRememberPassword(e.target.checked)}
                  style={{ color: '#757575' }}
                />
              }
              label="Remember Password"
              className="remember-password"
            />

            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: '#FFD700',
                color: 'black',
                width: '100%',
                padding: '0.8rem',
                fontWeight: 'bold',
                marginTop: '1rem'
              }}
            >
              SIGN IN
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

export default Login;
