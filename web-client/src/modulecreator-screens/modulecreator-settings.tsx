import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const ModuleCreatorSettings = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="settings-screen">
          <div className="screen-title">Settings</div>

          <div className="settings-card" onClick={() => navigate('/modulecreator-change-password')}>
            <div className="settings-card-icon"><LockIcon /></div>
            <div className="settings-card-text">Change Password</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorSettings;