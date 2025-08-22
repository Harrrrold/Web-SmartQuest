import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type LevelItem = {
  id: string;
  title: string;
};

const ModuleCreatorCreateModule: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editingModuleId = (location.state as { moduleId?: string } | null)?.moduleId;

  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [levels, setLevels] = useState<LevelItem[]>([{ id: '1', title: 'Level 1' }]);

  const handleAddLevel = () => {
    setLevels(prev => {
      const nextIndex = prev.length + 1;
      return [...prev, { id: String(Date.now()), title: `Level ${nextIndex}` }];
    });
  };

  const handleEditLevel = (levelId: string) => {
    navigate('/modulecreator-edit-level', { state: { levelId } });
  };

  const handleDeleteLevel = (levelId: string) => {
    setLevels(prev => prev.filter(l => l.id !== levelId));
  };

  const isSaveDisabled = useMemo(() => {
    return !title.trim();
  }, [title]);

  useEffect(() => {
    if (!editingModuleId) return;
    try {
      const raw = localStorage.getItem('sq_modules');
      if (!raw) return;
      const list = JSON.parse(raw);
      if (!Array.isArray(list)) return;
      const mod = list.find((m: any) => m.id === editingModuleId);
      if (!mod) return;
      setTitle(mod.title ?? '');
      setPrice(mod.price ?? '');
      setDescription(mod.description ?? '');
      setLevels(Array.isArray(mod.levels) && mod.levels.length ? mod.levels : [{ id: '1', title: 'Level 1' }]);
    } catch {
      // ignore
    }
  }, [editingModuleId]);

  const handleSave = () => {
    try {
      const STORAGE_KEY = 'sq_modules';
      const raw = localStorage.getItem(STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      const normalizedList = Array.isArray(list) ? list : [];

      if (editingModuleId) {
        const updated = normalizedList.map((m: any) =>
          m.id === editingModuleId
            ? { ...m, title: title.trim(), price: price.trim(), description: description.trim(), levels }
            : m
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } else {
        const payload = {
          id: String(Date.now()),
          title: title.trim(),
          price: price.trim(),
          description: description.trim(),
          levels,
          isArchived: false,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...normalizedList, payload]));
      }
    } catch {
      // ignore storage errors in placeholder mode
    }

    navigate('/modulecreator-modulelist');
  };

  const handleCancel = () => {
    navigate('/modulecreator-modulelist');
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="create-module">
          <div className="create-module-header">{editingModuleId ? 'Edit Module' : 'Create Module'}</div>

          <div className="card-section">
            <div className="row two-col">
              <div className="row-left">
                <div className="icon-tile large">
                  <MenuBookIcon />
                </div>
                <div className="field">
                  <label>Title</label>
                  <input
                    className="input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="field small">
                <label>Price</label>
                <input
                  className="input"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label>Description</label>
              <textarea
                className="textarea"
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="center-row">
            <button className="create-button" onClick={handleAddLevel}>Add Level</button>
          </div>

          <div className="card-section">
            <div className="field">
              <label>Level</label>
              <div className="levels-container">
                {levels.map((lvl) => (
                  <div key={lvl.id} className="level-item">
                    <div className="level-header">
                      <div className="level-title">{lvl.title}</div>
                      <div className="level-actions">
                        <button
                          className="action-button green"
                          title="Edit Level"
                          onClick={() => handleEditLevel(lvl.id)}
                        >
                          <EditIcon />
                        </button>
                        <button
                          className="action-button red"
                          title="Delete Level"
                          onClick={() => handleDeleteLevel(lvl.id)}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>
                    <div className="level-body" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button className="create-button" disabled={isSaveDisabled} onClick={handleSave}>Save</button>
            <button className="secondary-button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorCreateModule;
