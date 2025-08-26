import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import SecurityIcon from '@mui/icons-material/Security';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ModuleCreatorMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'profile',
      title: 'Profile',
      icon: <PersonIcon />,
      path: '/modulecreator-profile'
    },
    {
      id: 'payment',
      title: 'Payment Method',
      icon: <CreditCardIcon />,
      path: '/modulecreator-payment-method'
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: <SettingsIcon />,
      path: '/modulecreator-settings'
    },
    {
      id: 'about',
      title: 'About',
      icon: <InfoIcon />,
      path: '/modulecreator-about'
    },
    {
      id: 'terms',
      title: 'Terms and Agreement',
      icon: <SecurityIcon />,
      path: '/modulecreator-terms-and-agreement'
    }
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="module-creator-menu">
          <div className="menu-header">Module Creator</div>
          
          <div className="user-profile-section">
            <div className="user-avatar-large">
              <AccountCircleIcon style={{ fontSize: '120px', color: '#9c27b0' }} />
            </div>
            <div className="user-name-large">Macy Rey</div>
            <div className="user-email">macyrey@gmail.com</div>
          </div>

          <div className="menu-items">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="menu-item"
                onClick={() => handleMenuClick(item.path)}
              >
                <div className="menu-item-icon">
                  {item.icon}
                </div>
                <div className="menu-item-text">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorMenu;
