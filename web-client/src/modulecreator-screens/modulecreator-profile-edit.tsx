import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const ModuleCreatorProfileEdit = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleCancel = () => {
    navigate('/modulecreator-profile');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement save logic or API call here
    navigate('/modulecreator-profile');
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="profile-edit-screen">
          <div className="menu-header">Module Creator</div>

          <form className="profile-edit-form" onSubmit={handleSave}>
            <div className="user-avatar-large" style={{ marginBottom: '1rem' }}>
              <AccountCircleIcon style={{ fontSize: '120px', color: '#9c27b0' }} />
            </div>

            <label className="edit-label">First Name</label>
            <input className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label className="edit-label">Last Name</label>
            <input className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />

            <label className="edit-label">Phone</label>
            <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <label className="edit-label">Address</label>
            <input className="input" value={address} onChange={(e) => setAddress(e.target.value)} />

            <div className="edit-actions">
              <button type="button" className="danger-button" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="primary-button">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorProfileEdit;