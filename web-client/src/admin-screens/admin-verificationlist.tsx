import React, { useEffect, useMemo, useState } from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

type VerificationItem = {
  id: string;
  title: string;
  type: 'module-creator' | 'module';
  creator?: string;
  description?: string;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected';
};

const INITIAL_VERIFICATIONS: VerificationItem[] = [
  {
    id: '1',
    title: 'Harrold Resma',
    type: 'module-creator',
    requestDate: '2024-01-15',
    status: 'pending'
  },
  {
    id: '2',
    title: 'John Ryan Gomez',
    type: 'module-creator',
    requestDate: '2024-01-14',
    status: 'pending'
  },
  {
    id: '3',
    title: 'Charles Elejean Elegino',
    type: 'module-creator',
    requestDate: '2024-01-13',
    status: 'pending'
  },
  {
    id: '4',
    title: 'Fraction Adventure',
    type: 'module',
    creator: 'Macy Rey',
    description: 'A casual yet challenging math module for any range of age!',
    requestDate: '2024-01-12',
    status: 'pending'
  },
  {
    id: '5',
    title: 'Shapes and Numbers',
    type: 'module',
    creator: 'John Doe',
    description: 'Recognize shapes and count numbers with fun visuals.',
    requestDate: '2024-01-11',
    status: 'pending'
  },
  {
    id: '6',
    title: 'Learning Shapes',
    type: 'module',
    creator: 'Jane Smith',
    description: 'Identify and classify 2D and 3D shapes.',
    requestDate: '2024-01-10',
    status: 'pending'
  }
];

const STORAGE_KEY = 'sq_admin_verifications';

const readVerificationsFromStorage = (): VerificationItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_VERIFICATIONS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as VerificationItem[];
    return INITIAL_VERIFICATIONS;
  } catch {
    return INITIAL_VERIFICATIONS;
  }
};

const writeVerificationsToStorage = (items: VerificationItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
};

const AdminVerificationList: React.FC = () => {
  const [verifications, setVerifications] = useState<VerificationItem[]>(readVerificationsFromStorage());
  useEffect(() => {
    writeVerificationsToStorage(verifications);
  }, [verifications]);
  const [activeTab, setActiveTab] = useState<'module-creator' | 'module'>('module-creator');
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  // Filter based on tab + search query
  const filteredVerifications = useMemo(() => {
    const source = verifications.filter(v => v.type === activeTab);
    
    if (!query.trim()) return source;
    const q = query.toLowerCase();
    return source.filter(v => 
      v.title.toLowerCase().includes(q) || 
      (v.creator && v.creator.toLowerCase().includes(q))
    );
  }, [verifications, activeTab, query]);

  // === Actions ===
  const handleView = (verificationId: string) => {
    const verification = verifications.find(v => v.id === verificationId);
    navigate('/admin-verification-module-content', { state: { verification } });
  };

  const handleApprove = (verificationId: string) => {
    setVerifications(prev => prev.map(v => 
      v.id === verificationId ? { ...v, status: 'approved' } : v
    ));
  };

  const handleReject = (verificationId: string) => {
    setVerifications(prev => prev.map(v => 
      v.id === verificationId ? { ...v, status: 'rejected' } : v
    ));
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="module-management">
          <div className="screen-title">Verification</div>

          <div className="module-controls">
            <div className="tabs">
              <button
                className={`tab-button ${activeTab === 'module-creator' ? 'active' : ''}`}
                onClick={() => setActiveTab('module-creator')}
              >
                Module Creator
              </button>
              <button
                className={`tab-button ${activeTab === 'module' ? 'active' : ''}`}
                onClick={() => setActiveTab('module')}
              >
                Modules
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

          <div className="module-list">
            {filteredVerifications.map((verification) => (
              <div key={verification.id} className="module-item">
                <div className="module-left" onClick={() => handleView(verification.id)}>
                  <div className="module-icon-tile">
                    {verification.type === 'module-creator' ? <PersonIcon /> : <MenuBookIcon />}
                  </div>
                  <div className="module-info">
                    <div className="module-title">{verification.title}</div>
                    {verification.creator && (
                      <div className="module-creator">by {verification.creator}</div>
                    )}
                  </div>
                </div>
                <div className="module-actions">
                  <button
                    className="action-button yellow"
                    onClick={() => handleView(verification.id)}
                    title="View Details"
                  >
                    <VisibilityIcon />
                  </button>
                  <button
                    className="action-button green"
                    onClick={() => handleApprove(verification.id)}
                    title="Approve"
                  >
                    <CheckIcon />
                  </button>
                  <button
                    className="action-button red"
                    onClick={() => handleReject(verification.id)}
                    title="Reject"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>
            ))}

            {filteredVerifications.length === 0 && (
              <div className="no-modules">No verification requests found.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminVerificationList;