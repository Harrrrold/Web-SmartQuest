import React from 'react';
import Sidebar from '../components/sidebar';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../styles/global.css';

type NotificationItem = {
  id: string;
  type: 'account-verification' | 'module-verification';
  title: string;
  message: string;
  timeAgo: string;
  userName: string;
};

const sampleNotifications: NotificationItem[] = [
  {
    id: '1',
    type: 'account-verification',
    title: 'Phoenix Baker',
    message: 'Requests for Account Verification',
    timeAgo: '2m ago',
    userName: 'Phoenix Baker'
  },
  {
    id: '2',
    type: 'account-verification',
    title: 'Lori Bryson',
    message: 'Requests for Account Verification',
    timeAgo: '1h ago',
    userName: 'Lori Bryson'
  },
  {
    id: '3',
    type: 'module-verification',
    title: 'Orlando Diggs',
    message: 'Requests for Module Verification',
    timeAgo: '3h ago',
    userName: 'Orlando Diggs'
  },
  {
    id: '4',
    type: 'module-verification',
    title: 'Kate Morrison',
    message: 'Requests for Module Verification',
    timeAgo: 'Yesterday',
    userName: 'Kate Morrison'
  },
];

const IconForType: React.FC<{ type: NotificationItem['type'] }>
  = ({ type }) => {
    if (type === 'account-verification') return <PersonIcon />;
    return <MenuBookIcon />;
  };

const AdminNotification: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content notifications-screen">
        <div className="notifications-header">
          <div className="screen-title">Notification</div>
          <button className="secondary-button">Mark all as read</button>
        </div>

        <div className="notifications-list">
          {sampleNotifications.map((n) => (
            <div key={n.id} className="notification-card">
              <div className="notification-avatar">
                <div className="avatar-circle">
                  <span className="avatar-initial">{n.userName.charAt(0)}</span>
                </div>
              </div>
              <div className="notification-content">
                <div className="notification-title">{n.title}</div>
                <div className="notification-message">{n.message}</div>
                <div className="notification-detail">{n.type === 'account-verification' ? 'Account Verification' : 'Module Verification'}</div>
                <div className="notification-meta">
                  <span className="notification-time">{n.timeAgo}</span>
                  <span className="unread-dot" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminNotification;