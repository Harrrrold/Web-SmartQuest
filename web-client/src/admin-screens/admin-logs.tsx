import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';

type LogItem = {
  id: string;
  user: string;
  action: string;
  moduleTitle: string;
  moduleDescription: string;
  timeAgo: string;
  userInitial: string;
  avatarColor: string;
};

const sampleLogs: LogItem[] = [
  {
    id: '1',
    user: 'Grace',
    action: 'published a Module',
    moduleTitle: 'Basic in mathematics 1',
    moduleDescription: 'Basic in mathematics 1 is a very simple yet fun module for you to try!',
    timeAgo: '1d.',
    userInitial: 'G',
    avatarColor: '#e91e63'
  },
  {
    id: '2',
    user: 'Grace',
    action: 'published a Module',
    moduleTitle: 'Basic in mathematics 2',
    moduleDescription: 'Basic mathematics 2 is the sequel for math 1! Go have fun while learning!',
    timeAgo: '1d.',
    userInitial: 'G',
    avatarColor: '#e91e63'
  },
  {
    id: '3',
    user: 'Harrold',
    action: 'published a Module',
    moduleTitle: 'Math is life, math is good!',
    moduleDescription: 'A casual yet challenging math module for any range of age!',
    timeAgo: '1d.',
    userInitial: 'H',
    avatarColor: '#2196f3'
  },
  {
    id: '4',
    user: 'Resma',
    action: 'has Bought a Module',
    moduleTitle: 'Math is life, math is good!',
    moduleDescription: 'A casual yet challenging math module for any range of age!',
    timeAgo: '1d.',
    userInitial: 'R',
    avatarColor: '#2196f3'
  },
];

const AdminLogs: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content logs-screen">
        <div className="screen-title">Activity Logs</div>
        
        <div className="logs-container">
          <div className="timeline">
            {sampleLogs.map((log, index) => (
              <div key={log.id} className="log-entry">
                <div className="log-avatar">
                  <div 
                    className="avatar-circle"
                    style={{ backgroundColor: log.avatarColor }}
                  >
                    <span className="avatar-initial">{log.userInitial}</span>
                  </div>
                  {index < sampleLogs.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="log-content">
                  <div className="log-action">
                    <strong>{log.user}</strong> {log.action}
                  </div>
                  <div className="log-module-title">Title: {log.moduleTitle}</div>
                  <div className="log-module-description">Description: {log.moduleDescription}</div>
                  <div className="log-time">{log.timeAgo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogs;
