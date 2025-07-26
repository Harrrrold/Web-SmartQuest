import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/global.css';
import backgroundImage from '../assets/Background.gif';
import smartQuestLogo from '../assets/SmartQuest Logo.png';
import googleLogo from '../assets/Google Logo.png';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="background-container">
      <img 
        src={backgroundImage}
        alt="Background" 
        className="background-image"
      />
      <div className="background-overlay" />
      <div className="content-container">
        <div className="logo-container">
          <img 
            src={smartQuestLogo}
            alt="SmartQuest Logo" 
            className="logo"
          />
          <h2>Welcome</h2>
        </div>
        
        <div className="button-container">
          <Button
            variant="contained"
            onClick={() => navigate('/login')}
            style={{
              backgroundColor: '#FFD700',
              color: 'black',
              width: '100%',
              padding: '0.8rem',
              fontWeight: 'bold'
            }}
          >
            SIGN IN
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate('/register')}
            style={{
              borderColor: 'white',
              color: 'white',
              width: '100%',
              padding: '0.8rem',
              fontWeight: 'bold'
            }}
          >
            SIGN UP
          </Button>

          <div style={{ textAlign: 'center', margin: '1rem 0', color: 'white' }}>
            CONTINUE WITH
          </div>

          <button className="google-button" onClick={() => navigate('/google-auth')}>
            <img 
              src={googleLogo}
              alt="Google" 
              className="google-logo"
            />
            <span style={{ color: '#757575' }}>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
