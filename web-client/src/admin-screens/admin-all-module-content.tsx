import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';

const AdminAllModuleContent = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        {/* Your content will go here */}
        <h2>Welcome to Admin All Module Content</h2>
      </div>
    </>
  );
};

export default AdminAllModuleContent;