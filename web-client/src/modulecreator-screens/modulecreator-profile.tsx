import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const ModuleCreatorProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="profile-screen">
          <div className="screen-title">Module Creator</div>

          <div className="profile-header">
            <div className="user-avatar-large">
              <AccountCircleIcon style={{ fontSize: '120px', color: '#9c27b0' }} />
            </div>
            <div className="user-name-large">Moni Roy</div>
            <div className="user-email">moniroy@gmail.com</div>

            <button className="primary-button profile-edit-button" onClick={() => navigate('/modulecreator-profile-edit')}>Edit Profile</button>
          </div>

          <div className="profile-info-section">
            <div className="profile-info-title">Information</div>
            <div className="profile-card">
              <div className="profile-row"><span className="profile-label">First Name:</span><span className="profile-value">Moni</span></div>
              <div className="profile-row"><span className="profile-label">Last Name:</span><span className="profile-value">Roy</span></div>
              <div className="profile-row"><span className="profile-label">Email:</span><span className="profile-value">moniroy@gmail.com</span></div>
              <div className="profile-row"><span className="profile-label">Phone:</span><span className="profile-value">09223334444</span></div>
              <div className="profile-row"><span className="profile-label">Address:</span><span className="profile-value">Banilad, Cebu City</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorProfile;