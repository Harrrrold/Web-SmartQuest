import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';

const ModuleCreatorDashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        {/* Your dashboard content will go here */}
        <h2>Welcome to Module Creator Dashboard</h2>
      </div>
    </>
  );
};

export default ModuleCreatorDashboard;
