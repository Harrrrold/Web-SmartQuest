import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import '../styles/global.css';
import backgroundImage from '../assets/Background.gif';

const Register = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    // Store the selected role in session storage for use in the credentials page
    sessionStorage.setItem('selectedRole', role);
    navigate('/register-credentials');
  };

  const buttonStyle = {
    backgroundColor: '#FFD700',
    color: 'black',
    width: '100%',
    padding: '1rem',
    marginBottom: '1rem',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: '1.1rem'
  };

  const iconStyle = {
    color: 'black',
    fontSize: '1.5rem'
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
        <div className="register-card">
          <h1>Choose Classification</h1>
          <p className="register-subtitle">What are you?</p>
          
          <div className="role-buttons-container">
            <Button
              variant="contained"
              className="role-button"
              onClick={() => handleRoleSelect('module-creator')}
              style={buttonStyle}
              startIcon={<PersonIcon sx={iconStyle} />}
              endIcon={<span style={{ color: 'black', fontSize: '1.5rem' }}>→</span>}
            >
              Module Creator
            </Button>

            <Button
              variant="contained"
              className="role-button"
              onClick={() => handleRoleSelect('pupils')}
              style={buttonStyle}
              startIcon={<PersonIcon sx={iconStyle} />}
              endIcon={<span style={{ color: 'black', fontSize: '1.5rem' }}>→</span>}
            >
              Pupils
            </Button>

            <Button
              variant="contained"
              className="role-button"
              onClick={() => handleRoleSelect('parent')}
              style={buttonStyle}
              startIcon={<PersonIcon sx={iconStyle} />}
              endIcon={<span style={{ color: 'black', fontSize: '1.5rem' }}>→</span>}
            >
              Parent
            </Button>

            <div className="login-prompt">
              Already have an <a href="/login" className="login-link">account</a>?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
