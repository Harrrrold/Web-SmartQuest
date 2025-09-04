import React, { useEffect, useMemo, useState } from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import RestoreIcon from '@mui/icons-material/Restore';
import { useNavigate } from 'react-router-dom';

type ModuleItem = {
  id: string;
  title: string;
  isArchived?: boolean;
  isDefault?: boolean;
  creator?: string;
  description?: string;
  levels?: { id: string; title: string }[];
};

const INITIAL_MODULES: ModuleItem[] = [
  { 
    id: '1', 
    title: 'Fraction Adventure',
    description: 'A casual yet challenging math module for any range of age!',
    isDefault: true,
    creator: 'Admin',
    levels: [
      { id: 'l1', title: 'Level 1' },
      { id: 'l2', title: 'Level 2' },
      { id: 'l3', title: 'Level 3' }
    ]
  },
  { 
    id: '2', 
    title: 'Shapes and Numbers', 
    description: 'Recognize shapes and count numbers with fun visuals.',
    isDefault: true,
    creator: 'Admin',
    levels: [ { id: 'l1', title: 'Level 1' } ] 
  },
  { 
    id: '3', 
    title: 'Learning Shapes', 
    description: 'Identify and classify 2D and 3D shapes.',
    isDefault: true,
    creator: 'Admin',
    levels: [ { id: 'l1', title: 'Level 1' }, { id: 'l2', title: 'Level 2' } ] 
  },
  { 
    id: '4', 
    title: 'Math Basics', 
    description: 'Basic math operations for beginners.',
    creator: 'Macy Rey',
    levels: [ { id: 'l1', title: 'Level 1' } ] 
  },
  { 
    id: '5', 
    title: 'Algebra Fundamentals', 
    description: 'Introduction to algebraic concepts.',
    creator: 'John Doe',
    levels: [ { id: 'l1', title: 'Level 1' }, { id: 'l2', title: 'Level 2' } ] 
  },
  { 
    id: '6', 
    title: 'Archived Fractions', 
    isArchived: true,
    isDefault: true,
    creator: 'Admin'
  },
  { 
    id: '7', 
    title: 'Old Geometry Module', 
    isArchived: true,
    creator: 'Jane Smith'
  },
  { 
    id: '8', 
    title: 'Archived Algebra Basics', 
    isArchived: true,
    creator: 'Bob Wilson'
  }
];

const STORAGE_KEY = 'sq_admin_modules';

const readModulesFromStorage = (): ModuleItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_MODULES;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as ModuleItem[];
    return INITIAL_MODULES;
  } catch {
    return INITIAL_MODULES;
  }
};

const writeModulesToStorage = (items: ModuleItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
};

const AdminModuleList: React.FC = () => {
  const [modules, setModules] = useState<ModuleItem[]>(readModulesFromStorage());
  useEffect(() => {
    writeModulesToStorage(modules);
  }, [modules]);
  const [activeTab, setActiveTab] = useState<'default' | 'archived' | 'all'>('default');
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  // Filter based on tab + search query
  const filteredModules = useMemo(() => {
    let source: ModuleItem[];
    
    switch (activeTab) {
      case 'default':
        source = modules.filter(m => m.isDefault && !m.isArchived);
        break;
      case 'archived':
        source = modules.filter(m => m.isArchived);
        break;
      case 'all':
        source = modules.filter(m => !m.isArchived);
        break;
      default:
        source = [];
    }
    
    if (!query.trim()) return source;
    const q = query.toLowerCase();
    return source.filter(m => m.title.toLowerCase().includes(q));
  }, [modules, activeTab, query]);

  // === Actions ===
  const handleCreateModule = () => {
    navigate('/admin-create-module');
  };

  const handleView = (moduleId: string) => {
    const mod = modules.find(m => m.id === moduleId);
    navigate('/admin-module-content', { state: { module: mod } });
  };

  const handleEdit = (moduleId: string) => {
    navigate('/admin-create-module', { state: { moduleId } });
  };

  const handleArchive = (moduleId: string) => {
    setModules(prev => prev.map(m => (m.id === moduleId ? { ...m, isArchived: true } : m)));
  };

  const handleRestore = (moduleId: string) => {
    setModules(prev => prev.map(m => (m.id === moduleId ? { ...m, isArchived: false } : m)));
  };

  const handleDelete = (moduleId: string) => {
    setModules(prev => prev.filter(m => m.id !== moduleId));
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="module-management">
          <div className="screen-title">Module Management</div>

          <div className="module-controls">
            <div className="tabs">
              <button
                className={`tab-button ${activeTab === 'default' ? 'active' : ''}`}
                onClick={() => setActiveTab('default')}
              >
                Default Modules
              </button>
              <button
                className={`tab-button ${activeTab === 'archived' ? 'active' : ''}`}
                onClick={() => setActiveTab('archived')}
              >
                Archived Modules
              </button>
              <button
                className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Modules
              </button>
            </div>

            <div className="search-and-create">
              <div className="search-container">
                <SearchIcon className="search-icon" />
                <input
                  className="search-input"
                  placeholder="Search Module"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              {activeTab === 'default' && (
                <button className="create-button" onClick={handleCreateModule}>
                  Create Module
                </button>
              )}
            </div>
          </div>

          <div className="module-list">
            {filteredModules.map((mod) => (
              <div key={mod.id} className="module-item">
                <div className="module-left" onClick={() => handleView(mod.id)}>
                  <div className="module-icon-tile">
                    <MenuBookIcon />
                  </div>
                  <div className="module-info">
                    <div className="module-title">{mod.title}</div>
                    {mod.creator && (
                      <div className="module-creator">by {mod.creator}</div>
                    )}
                  </div>
                </div>
                <div className="module-actions">
                  {activeTab === 'default' ? (
                    <>
                      <button
                        className="action-button yellow"
                        onClick={() => handleView(mod.id)}
                        title="View"
                      >
                        <VisibilityIcon />
                      </button>
                      <button
                        className="action-button green"
                        onClick={() => handleEdit(mod.id)}
                        title="Edit"
                      >
                        <EditIcon />
                      </button>
                      <button
                        className="action-button red"
                        onClick={() => handleArchive(mod.id)}
                        title="Archive"
                      >
                        <ArchiveIcon />
                      </button>
                    </>
                  ) : activeTab === 'archived' ? (
                    <>
                      <button
                        className="action-button green"
                        onClick={() => handleRestore(mod.id)}
                        title="Restore"
                      >
                        <RestoreIcon />
                      </button>
                      <button
                        className="action-button red"
                        onClick={() => handleDelete(mod.id)}
                        title="Delete"
                      >
                        <DeleteIcon />
                      </button>
                    </>
                  ) : (
                    // All Modules tab
                    <>
                      <button
                        className="action-button yellow"
                        onClick={() => handleView(mod.id)}
                        title="View"
                      >
                        <VisibilityIcon />
                      </button>
                      <button
                        className="action-button red"
                        onClick={() => handleArchive(mod.id)}
                        title="Archive"
                      >
                        <ArchiveIcon />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}

            {filteredModules.length === 0 && (
              <div className="no-modules">No modules found.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminModuleList;
  