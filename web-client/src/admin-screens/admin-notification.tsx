import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';

const AdminNotification = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        {/* Your content will go here */}
        <h2>Welcome to Admin Notification</h2>
      </div>
    </>
  );
};

export default AdminNotification;