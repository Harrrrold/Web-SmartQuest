import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import smartQuestLogo from '../assets/SmartQuest Logo.png';
import '../styles/global.css';

interface SidebarProps {
  userName?: string;
  userRole?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  userName = "Macy Rey",  // Default values for development
  userRole = "Module Creator" 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // For now, just navigate to login
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
        />
        
        <div className="sidebar-menu">
          <div 
            className={`sidebar-menu-item ${isActive('/dashboard') ? 'active' : ''}`}
            onClick={() => navigate('/dashboard')}
          >
            <DashboardIcon />
            <span>Dashboard</span>
          </div>

          <div 
            className={`sidebar-menu-item ${isActive('/modules') ? 'active' : ''}`}
            onClick={() => navigate('/modules')}
          >
            <MenuBookIcon />
            <span>Modules</span>
          </div>

          <div 
            className={`sidebar-menu-item ${isActive('/menu') ? 'active' : ''}`}
            onClick={() => navigate('/menu')}
          >
            <MenuIcon />
            <span>Menu</span>
          </div>

        </div>

        <div className="sidebar-bottom">
          <div 
            className="sidebar-menu-item"
            onClick={handleLogout}
          >
            <LogoutIcon />
            <span>Logout</span>
          </div>

          <div 
            className={`sidebar-menu-item ${isActive('/profile') ? 'active' : ''}`}
            onClick={() => navigate('/profile')}
          >
            <AccountCircleIcon />
            <span>Profile</span>
          </div>
          
        </div>
      </div>

      {/* Top Header */}
      <div className="top-header">
        <div className="user-profile">
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
