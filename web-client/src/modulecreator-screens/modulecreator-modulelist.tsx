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
  price?: string;
  description?: string;
  levels?: { id: string; title: string }[];
};

const INITIAL_MODULES: ModuleItem[] = [
  { 
    id: '1', 
    title: 'Fraction Adventure',
    description: 'A casual yet challenging math module for any range of age!',
    levels: [
      { id: 'l1', title: 'Level 1' },
      { id: 'l2', title: 'Level 2' },
      { id: 'l3', title: 'Level 3' }
    ]
  },
  { id: '2', title: 'Shapes and Numbers', description: 'Recognize shapes and count numbers with fun visuals.', levels: [ { id: 'l1', title: 'Level 1' } ] },
  { id: '3', title: 'Learning Shapes', description: 'Identify and classify 2D and 3D shapes.', levels: [ { id: 'l1', title: 'Level 1' }, { id: 'l2', title: 'Level 2' } ] },
  { id: '4', title: 'Archived Fractions', isArchived: true },
  { id: '5', title: 'Old Geometry Module', isArchived: true },
  { id: '6', title: 'Archived Algebra Basics', isArchived: true }
];

const STORAGE_KEY = 'sq_modules';

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

const ModuleCreatorModuleList: React.FC = () => {
  const [modules, setModules] = useState<ModuleItem[]>(readModulesFromStorage());
  useEffect(() => {
    writeModulesToStorage(modules);
  }, [modules]);
  const [activeTab, setActiveTab] = useState<'my' | 'archived'>('my');
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  // Filter based on tab + search query
  const filteredModules = useMemo(() => {
    const source = modules.filter(m =>
      activeTab === 'archived' ? m.isArchived : !m.isArchived
    );
    if (!query.trim()) return source;
    const q = query.toLowerCase();
    return source.filter(m => m.title.toLowerCase().includes(q));
  }, [modules, activeTab, query]);

  // === Actions ===
  const handleCreateModule = () => {
    navigate('/modulecreator-create-module');
  };

  const handlePreview = (moduleId: string) => {
    const mod = modules.find(m => m.id === moduleId);
    navigate('/modulecreator-module-content', { state: { module: mod } });
  };

  const handleEdit = (moduleId: string) => {
    navigate('/modulecreator-create-module', { state: { moduleId } });
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
                className={`tab-button ${activeTab === 'my' ? 'active' : ''}`}
                onClick={() => setActiveTab('my')}
              >
                My Modules
              </button>
              <button
                className={`tab-button ${activeTab === 'archived' ? 'active' : ''}`}
                onClick={() => setActiveTab('archived')}
              >
                Archived Module
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
              {activeTab === 'my' && (
              <button className="create-button" onClick={handleCreateModule}>
                Create Module
              </button>
               )}
            </div>
          </div>

          <div className="module-list">
            {filteredModules.map((mod) => (
              <div key={mod.id} className="module-item">
                <div className="module-left" onClick={() => navigate('/modulecreator-module-content', { state: { module: mod } })}>
                  <div className="module-icon-tile">
                    <MenuBookIcon />
                  </div>
                  <div className="module-title">{mod.title}</div>
                </div>
                <div className="module-actions">
                  {activeTab === 'my' ? (
                    <>
                      <button
                        className="action-button yellow"
                        onClick={() => handlePreview(mod.id)}
                      >
                        <VisibilityIcon />
                      </button>
                      <button
                        className="action-button green"
                        onClick={() => handleEdit(mod.id)}
                      >
                        <EditIcon />
                      </button>
                      <button
                        className="action-button red"
                        onClick={() => handleArchive(mod.id)}
                      >
                        <ArchiveIcon />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="action-button green"
                        onClick={() => handleRestore(mod.id)}
                      >
                        <RestoreIcon />
                      </button>
                      <button
                        className="action-button red"
                        onClick={() => handleDelete(mod.id)}
                      >
                        <DeleteIcon />
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

export default ModuleCreatorModuleList;
