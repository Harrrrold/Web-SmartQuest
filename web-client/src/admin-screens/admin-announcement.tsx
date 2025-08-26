import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';

const AdminAnnouncement = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        {/* Your content will go here */}
        <h2>Welcome to Admin Announcement</h2>
      </div>
    </>
  );
};

export default AdminAnnouncement;