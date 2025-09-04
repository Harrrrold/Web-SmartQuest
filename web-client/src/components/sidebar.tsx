import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import CampaignIcon from '@mui/icons-material/Campaign';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// @ts-ignore - image import handled by bundler
import smartQuestLogo from '../assets/SmartQuest Logo.png';
import '../styles/global.css';

interface SidebarProps {
  userName?: string;
  userRole?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  userName = localStorage.getItem('userName') || "Macy Rey",  // Default values for development
  userRole = localStorage.getItem('role') || "Module Creator" 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Sidebar */}
      <div className="sidebar-container">
        <img 
          src={smartQuestLogo}
          alt="SmartQuest Logo" 
          className="sidebar-logo"
          onClick={() => userRole === 'Admin' ? navigate('/admin-dashboard') : navigate('/modulecreator-dashboard')}
          style={{ cursor: 'pointer' }}
        />
        
        <div className="sidebar-menu">
          {userRole === 'Admin' ? (
            <>
              <div 
                className={`sidebar-menu-item ${isActive('/admin-dashboard') ? 'active' : ''}`}
                onClick={() => navigate('/admin-dashboard')}
              >
                <DashboardIcon />
                <span>Dashboard</span>
              </div>

              <div 
                className={`sidebar-menu-item ${isActive('/admin-modulelist') ? 'active' : ''}`}
                onClick={() => navigate('/admin-modulelist')}
              >
                <MenuBookIcon />
                <span>Modules</span>
              </div>

              <div 
                className={`sidebar-menu-item ${isActive('/admin-userlist') ? 'active' : ''}`}
                onClick={() => navigate('/admin-userlist')}
              >
                <AccountCircleIcon />
                <span>Users</span>
              </div>

              <div 
                className={`sidebar-menu-item ${isActive('/admin-announcement') ? 'active' : ''}`}
                onClick={() => navigate('/admin-announcement')}
              >
                <CampaignIcon />
                <span>Announcement</span>
              </div>

              <div 
                className={`sidebar-menu-item ${isActive('/admin-verificationlist') ? 'active' : ''}`}
                onClick={() => navigate('/admin-verificationlist')}
              >
                <FactCheckIcon />
                <span>Verification</span>
              </div>

              <div 
                className={`sidebar-menu-item ${isActive('/admin-logs') ? 'active' : ''}`}
                onClick={() => navigate('/admin-logs')}
              >
                <ReceiptLongIcon />
                <span>Logs</span>
              </div>
            </>
          ) : (
            <>
              <div 
                className={`sidebar-menu-item ${isActive('/modulecreator-dashboard') ? 'active' : ''}`}
                onClick={() => navigate('/modulecreator-dashboard')}
              >
                <DashboardIcon />
                <span>Dashboard</span>
              </div>

              <div 
                className={`sidebar-menu-item ${isActive('/modulecreator-modulelist') ? 'active' : ''}`}
                onClick={() => navigate('/modulecreator-modulelist')}
              >
                <MenuBookIcon />
                <span>Modules</span>
              </div>

              <div 
                className={`sidebar-menu-item ${isActive('/modulecreator-menu') ? 'active' : ''}`}
                onClick={() => navigate('/modulecreator-menu')}
              >
                <MenuIcon />
                <span>Menu</span>
              </div>
            </>
          )}

        </div>

        <div className="sidebar-bottom">
          <div 
            className="sidebar-menu-item"
            onClick={handleLogout}
          >
            <LogoutIcon />
            <span>Logout</span>
          </div>

          {userRole !== 'Admin' && (
            <div 
              className={`sidebar-menu-item ${isActive('/modulecreator-profile') ? 'active' : ''}`}
              onClick={() => navigate('/modulecreator-profile')}
            >
              <AccountCircleIcon />
              <span>Profile</span>
            </div>
          )}
          
        </div>
      </div>

      {/* Top Header */}
      <div className="top-header">
        <div className="user-profile">
          <div 
            className="notification-button" 
            title="Notifications"
            onClick={() => navigate('/modulecreator-notification')}
          >
            <NotificationsNoneIcon />
            <span className="notification-dot" />
          </div>
          <div className="user-info">
            <div className="user-name">{userName}</div>
            <div className="user-role">{userRole}</div>
          </div>
          <div className="user-avatar">
            <AccountCircleIcon style={{ fontSize: '2rem', color: '#FFD700' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
