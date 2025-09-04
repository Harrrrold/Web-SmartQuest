import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import WidgetsIcon from '@mui/icons-material/Widgets';
import GroupIcon from '@mui/icons-material/Group';

const AdminDashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content admin-dashboard">
        <div className="dashboard-header">
          <div className="screen-title">Dashboard</div>
        </div>

        <div className="admin-cards">
          <div className="admin-card">
            <div className="admin-card-top">
              <div className="admin-card-title">Total Modules</div>
              <div className="admin-card-icon modules"><WidgetsIcon /></div>
            </div>
            <div className="admin-card-value">62</div>
            <div className="admin-card-sub">42 Active Modules</div>
            <div className="admin-card-sub">20 Archived Modules</div>
            <button className="primary-button admin-action-button" onClick={() => window.location.href = '/admin-modulelist'}>
              Module List
            </button>
          </div>

          <div className="admin-card">
            <div className="admin-card-top">
              <div className="admin-card-title">Total Users</div>
              <div className="admin-card-icon users"><GroupIcon /></div>
            </div>
            <div className="admin-card-value">35</div>
            <div className="admin-card-sub">21 Pupils</div>
            <div className="admin-card-sub">8 Parents</div>
            <div className="admin-card-sub">6 Module Creators</div>
            <button className="primary-button admin-action-button" onClick={() => window.location.href = '/admin-userlist'}>
              User List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;