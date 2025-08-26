import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import { useNavigate } from 'react-router-dom';

const ModuleCreatorChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ old: string; next: string; confirm: string }>({ old: '', next: '', confirm: '' });

  const validate = () => {
    const nextErrors = { old: '', next: '', confirm: '' };
    if (!oldPassword) {
      nextErrors.old = 'Old password is required.';
    }
    if (!newPassword) {
      nextErrors.next = 'New password is required.';
    } else {
      if (newPassword.length < 8) {
        nextErrors.next = 'New password must be at least 8 characters.';
      }
      if (oldPassword && newPassword === oldPassword) {
        nextErrors.next = 'New password must be different from old password.';
      }
    }
    if (!confirmPassword) {
      nextErrors.confirm = 'Please confirm your new password.';
    } else if (confirmPassword !== newPassword) {
      nextErrors.confirm = 'Passwords do not match.';
    }
    setErrors(nextErrors);
    return !nextErrors.old && !nextErrors.next && !nextErrors.confirm;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: hook up API for changing password
    navigate('/modulecreator-settings');
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="change-password-screen">
          <div className="settings-title">Change Password</div>
          <form className="change-password-form" onSubmit={handleSubmit}>
            <label className="edit-label">Enter Old Password</label>
            <input className={`input ${errors.old ? 'error' : ''}`} type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            {errors.old && <div className="field-error">{errors.old}</div>}

            <label className="edit-label">Enter New Password</label>
            <input className={`input ${errors.next ? 'error' : ''}`} type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            {errors.next && <div className="field-error">{errors.next}</div>}

            <label className="edit-label">Confirm New Password</label>
            <input className={`input ${errors.confirm ? 'error' : ''}`} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {errors.confirm && <div className="field-error">{errors.confirm}</div>}

            <div className="center-row">
              <button type="submit" className="primary-button" disabled={!oldPassword || !newPassword || !confirmPassword}>Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorChangePassword;