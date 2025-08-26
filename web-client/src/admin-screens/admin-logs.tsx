import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';

const AdminLogs = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        {/* Your content will go here */}
        <h2>Welcome to Admin Logs</h2>
      </div>
    </>
  );
};

export default AdminLogs;
