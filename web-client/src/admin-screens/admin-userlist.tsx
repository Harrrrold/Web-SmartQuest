import React, { useEffect, useMemo, useState } from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

type UserItem = {
  id: string;
  name: string;
  email: string;
  role: 'Pupil' | 'Parent' | 'Module Creator';
  status: 'Active' | 'Inactive';
  modulesCount?: number;
  joinDate: string;
  lastActive?: string;
};

const INITIAL_USERS: UserItem[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@email.com',
    role: 'Pupil',
    status: 'Active',
    modulesCount: 5,
    joinDate: '2024-01-15',
    lastActive: '2024-01-20'
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.smith@email.com',
    role: 'Pupil',
    status: 'Active',
    modulesCount: 3,
    joinDate: '2024-01-10',
    lastActive: '2024-01-19'
  },
  {
    id: '3',
    name: 'Carol Davis',
    email: 'carol.davis@email.com',
    role: 'Pupil',
    status: 'Inactive',
    modulesCount: 1,
    joinDate: '2023-12-20',
    lastActive: '2024-01-05'
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.wilson@email.com',
    role: 'Parent',
    status: 'Active',
    joinDate: '2024-01-12',
    lastActive: '2024-01-20'
  },
  {
    id: '5',
    name: 'Emma Brown',
    email: 'emma.brown@email.com',
    role: 'Parent',
    status: 'Active',
    joinDate: '2024-01-08',
    lastActive: '2024-01-18'
  },
  {
    id: '6',
    name: 'Frank Miller',
    email: 'frank.miller@email.com',
    role: 'Parent',
    status: 'Inactive',
    joinDate: '2023-11-15',
    lastActive: '2024-01-02'
  },
  {
    id: '7',
    name: 'Grace Lee',
    email: 'grace.lee@email.com',
    role: 'Module Creator',
    status: 'Active',
    modulesCount: 8,
    joinDate: '2023-10-01',
    lastActive: '2024-01-20'
  },
  {
    id: '8',
    name: 'Henry Taylor',
    email: 'henry.taylor@email.com',
    role: 'Module Creator',
    status: 'Active',
    modulesCount: 12,
    joinDate: '2023-09-15',
    lastActive: '2024-01-19'
  },
  {
    id: '9',
    name: 'Ivy Chen',
    email: 'ivy.chen@email.com',
    role: 'Module Creator',
    status: 'Inactive',
    modulesCount: 4,
    joinDate: '2023-08-20',
    lastActive: '2024-01-10'
  }
];

const STORAGE_KEY = 'sq_admin_users';

const readUsersFromStorage = (): UserItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_USERS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as UserItem[];
    return INITIAL_USERS;
  } catch {
    return INITIAL_USERS;
  }
};

const writeUsersToStorage = (items: UserItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
};

const AdminUserList: React.FC = () => {
  const [users, setUsers] = useState<UserItem[]>(readUsersFromStorage());
  useEffect(() => {
    writeUsersToStorage(users);
  }, [users]);
  const [activeTab, setActiveTab] = useState<'Pupil' | 'Parent' | 'Module Creator'>('Pupil');
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  // Filter based on tab + search query
  const filteredUsers = useMemo(() => {
    const source = users.filter(u => u.role === activeTab);
    
    if (!query.trim()) return source;
    const q = query.toLowerCase();
    return source.filter(u => 
      u.name.toLowerCase().includes(q) || 
      u.email.toLowerCase().includes(q)
    );
  }, [users, activeTab, query]);

  // === Actions ===
  const handleView = (userId: string) => {
    const user = users.find(u => u.id === userId);
    navigate('/admin-user-view', { state: { user } });
  };

  const handleDelete = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      setUsers(prev => prev.filter(u => u.id !== userId));
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="module-management">
          <div className="screen-title">User Management</div>

          <div className="module-controls">
            <div className="tabs">
              <button
                className={`tab-button ${activeTab === 'Pupil' ? 'active' : ''}`}
                onClick={() => setActiveTab('Pupil')}
              >
                Pupils
              </button>
              <button
                className={`tab-button ${activeTab === 'Parent' ? 'active' : ''}`}
                onClick={() => setActiveTab('Parent')}
              >
                Parents
              </button>
              <button
                className={`tab-button ${activeTab === 'Module Creator' ? 'active' : ''}`}
                onClick={() => setActiveTab('Module Creator')}
              >
                Module Creator
              </button>
            </div>

            <div className="search-and-create">
              <div className="search-container">
                <SearchIcon className="search-icon" />
                <input
                  className="search-input"
                  placeholder="Search User"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="user-list">
            {filteredUsers.map((user) => (
              <div key={user.id} className="user-item">
                <div className="user-left" onClick={() => handleView(user.id)}>
                  <div className="user-icon-tile">
                    <PersonIcon />
                  </div>
                  <div className="user-info">
                    <div className="user-name-container">
                      <div className="user-name">{user.name}</div>
                      {user.role === 'Module Creator' && user.modulesCount !== undefined && (
                        <div className="user-modules-inline">
                          {user.modulesCount} module{user.modulesCount !== 1 ? 's' : ''}
                        </div>
                      )}
                    </div>
                    <div className="user-email">{user.email}</div>
                  </div>
                </div>
                <div className="user-actions">
                  <button
                    className="action-button yellow"
                    onClick={() => handleView(user.id)}
                    title="View User"
                  >
                    <VisibilityIcon />
                  </button>
                  <button
                    className="action-button red"
                    onClick={() => handleDelete(user.id)}
                    title="Delete User"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))}

            {filteredUsers.length === 0 && (
              <div className="no-modules">No users found.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUserList;
