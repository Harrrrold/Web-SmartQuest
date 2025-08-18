import React, { useMemo, useState } from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import RestoreIcon from '@mui/icons-material/Restore';

type ModuleItem = {
  id: string;
  title: string;
  isArchived?: boolean;
};

const SAMPLE_MODULES: ModuleItem[] = [
  { id: '1', title: 'Fraction Adventure' },
  { id: '2', title: 'Shapes and Numbers' },
  { id: '3', title: 'Learning Shapes' },
  { id: '4', title: 'Archived Fractions', isArchived: true },
  { id: '5', title: 'Old Geometry Module', isArchived: true },
  { id: '6', title: 'Archived Algebra Basics', isArchived: true }
];

const ModuleCreatorModuleList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'my' | 'archived'>('my');
  const [query, setQuery] = useState<string>('');

  const filteredModules = useMemo(() => {
    const source = SAMPLE_MODULES.filter(m =>
      activeTab === 'archived' ? m.isArchived : !m.isArchived
    );
    if (!query.trim()) return source;
    const q = query.toLowerCase();
    return source.filter(m => m.title.toLowerCase().includes(q));
  }, [activeTab, query]);

  const handleCreateModule = () => {
    console.log('Create Module clicked');
  };

  const handlePreview = (moduleId: string) => {
    console.log('Preview module', moduleId);
  };

  const handleEdit = (moduleId: string) => {
    console.log('Edit module', moduleId);
  };

  const handleDelete = (moduleId: string) => {
    console.log('Delete module', moduleId);
  };

  const handleArchive = (moduleId: string) => {
    console.log('Archive module', moduleId);
  };

  const handleRestore = (moduleId: string) => {
    console.log('Restore module', moduleId);
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="module-management">
          <div className="module-management-header">Module Management</div>

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
              <button className="create-button" onClick={handleCreateModule}>
                Create Module
              </button>
            </div>
          </div>

          <div className="module-list">
            {filteredModules.map((mod) => (
              <div key={mod.id} className="module-item">
                <div className="module-left">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorModuleList;
