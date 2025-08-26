import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';

const AdminUserView = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        {/* Your content will go here */}
        <h2>Welcome to Admin User View</h2>
      </div>
    </>
  );
};

export default AdminUserView;