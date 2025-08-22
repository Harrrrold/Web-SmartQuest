import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';

const ModuleCreatorSettings = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        {/* Your content will go here */}
        <h2>Welcome to Module Creator Settings</h2>
      </div>
    </>
  );
};

export default ModuleCreatorSettings;