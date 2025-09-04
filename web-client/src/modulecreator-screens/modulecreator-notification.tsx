import React from 'react';
import Sidebar from '../components/sidebar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarRateIcon from '@mui/icons-material/StarRate';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import '../styles/global.css';

type NotificationItem = {
  id: string;
  type: 'purchase' | 'rating' | 'follow';
  title: string;
  message: string;
  timeAgo: string;
};

const sampleNotifications: NotificationItem[] = [
  {
    id: '1',
    type: 'purchase',
    title: 'New Purchase',
    message: 'Alex Cruz bought "Intro to Biology"',
    timeAgo: '2m ago',
  },
  {
    id: '2',
    type: 'rating',
    title: 'Module Rated',
    message: '"Algebra Basics" received a 5-star rating',
    timeAgo: '1h ago',
  },
  {
    id: '3',
    type: 'purchase',
    title: 'New Purchase',
    message: 'Jamie Lee bought "World History Essentials"',
    timeAgo: '3h ago',
  },
  {
    id: '4',
    type: 'follow',
    title: 'New Follower',
    message: 'Maria Santos followed your modules',
    timeAgo: 'Yesterday',
  },
];

const IconForType: React.FC<{ type: NotificationItem['type'] }>
  = ({ type }) => {
    if (type === 'purchase') return <ShoppingCartIcon />;
    if (type === 'rating') return <StarRateIcon />;
    return <PersonAddIcon />;
  };

const ModuleCreatorNotification: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content notifications-screen">
        <div className="notifications-header">
          <div className="screen-title">Notifications</div>
          <button className="secondary-button">Mark all as read</button>
        </div>

        <div className="notifications-list">
          {sampleNotifications.map((n) => (
            <div key={n.id} className="notification-card">
              <div className={`notification-icon ${n.type}`}>
                <IconForType type={n.type} />
              </div>
              <div className="notification-content">
                <div className="notification-title">{n.title}</div>
                <div className="notification-message">{n.message}</div>
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

export default ModuleCreatorNotification;