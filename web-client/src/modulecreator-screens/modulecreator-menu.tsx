import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';

const ModuleCreatorMenu = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        {/* Your menu content will go here */}
        <h2>Welcome to Module Creator Dashboard</h2>
      </div>
    </>
  );
};

export default ModuleCreatorMenu;
