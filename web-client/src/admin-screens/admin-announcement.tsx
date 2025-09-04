import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';

const AdminAnnouncement = () => {
  const [announcementType, setAnnouncementType] = useState<string>('');
  const [announcementTarget, setAnnouncementTarget] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [searchUser, setSearchUser] = useState<string>('');
  const [showTypeDropdown, setShowTypeDropdown] = useState<boolean>(false);
  const [showTargetDropdown, setShowTargetDropdown] = useState<boolean>(false);

  const announcementTypes = ['Alert', 'Warning', 'Information'];
  const announcementTargets = ['All Pupils', 'All Parents', 'All Module Creators'];

  const handleSendNotification = () => {
    if (!announcementType || !announcementTarget || !content.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Here you would typically send the notification to your backend
    console.log('Sending notification:', {
      type: announcementType,
      target: announcementTarget,
      content: content,
      specificUser: searchUser
    });
    
    alert('Notification sent successfully!');
    
    // Reset form
    setAnnouncementType('');
    setAnnouncementTarget('');
    setContent('');
    setSearchUser('');
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="announcement-screen">
          <div className="screen-title">Announcement</div>
          
          <div className="announcement-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Select Announcement Type</label>
                <div className="dropdown-container">
                  <div 
                    className="dropdown-select"
                    onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                  >
                    <span>{announcementType || 'Select Type'}</span>
                    <KeyboardArrowUpIcon className={`dropdown-arrow ${showTypeDropdown ? 'open' : ''}`} />
                  </div>
                  {showTypeDropdown && (
                    <div className="dropdown-menu">
                      {announcementTypes.map((type) => (
                        <div
                          key={type}
                          className="dropdown-item"
                          onClick={() => {
                            setAnnouncementType(type);
                            setShowTypeDropdown(false);
                          }}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Select Announcement Target</label>
                <div className="dropdown-container">
                  <div 
                    className="dropdown-select"
                    onClick={() => setShowTargetDropdown(!showTargetDropdown)}
                  >
                    <span>{announcementTarget || 'Select Target'}</span>
                    <KeyboardArrowUpIcon className={`dropdown-arrow ${showTargetDropdown ? 'open' : ''}`} />
                  </div>
                  {showTargetDropdown && (
                    <div className="dropdown-menu">
                      {announcementTargets.map((target) => (
                        <div
                          key={target}
                          className="dropdown-item"
                          onClick={() => {
                            setAnnouncementTarget(target);
                            setShowTargetDropdown(false);
                          }}
                        >
                          {target}
                        </div>
                      ))}
                      <div className="dropdown-divider"></div>
                      <div className="dropdown-search">
                        <div className="search-container">
                          <SearchIcon className="search-icon" />
                          <input
                            className="search-input"
                            placeholder="Search User"
                            value={searchUser}
                            onChange={(e) => setSearchUser(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Content:</label>
              <textarea
                className="content-textarea"
                placeholder="Enter your announcement message here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
              />
            </div>

            <div className="form-actions">
              <button 
                className="send-button"
                onClick={handleSendNotification}
              >
                Send Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAnnouncement;