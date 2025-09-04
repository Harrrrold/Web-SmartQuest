import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';

const ModuleCreatorModuleLevelContent = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="screen-title">Module Level Content</div>
      </div>
    </>
  );
};

export default ModuleCreatorModuleLevelContent;
