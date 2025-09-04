import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation, useNavigate } from 'react-router-dom';

const ModuleCreatorModuleContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const moduleData = (location.state as any)?.module || {
    id: 'preview',
    title: 'Fraction Adventure',
    description: 'A casual yet challenging math module for any range of age!',
    levels: [
      { id: 'l1', title: 'Level 1' },
      { id: 'l2', title: 'Level 2' },
      { id: 'l3', title: 'Level 3' }
    ]
  };

  return (
    <>
      <Sidebar />
      <div className="main-content module-content">
        <div className="screen-title">Module Content</div>

        <div className="module-banner">
          <div className="module-banner-left">
            <div className="module-icon-tile">
              <MenuBookIcon />
            </div>
            <div className="module-banner-title">{moduleData.title}</div>
          </div>
          <div className="module-banner-actions">
            <button className="action-button yellow" title="Preview">
              <VisibilityIcon />
            </button>
            <button className="action-button green" title="Edit" onClick={() => navigate('/modulecreator-create-module', { state: { moduleId: moduleData.id } })}>
              <EditIcon />
            </button>
            <button className="action-button red" title="Delete">
              <DeleteIcon />
            </button>
          </div>
        </div>

        <div className="module-description-card">
          <div className="module-description-title">Description:</div>
          <div className="module-description-text">
            {moduleData.description || 'No description provided.'}
          </div>
        </div>

        <div className="module-levels-card">
          {(moduleData.levels || []).map((lvl: any) => (
            <button key={lvl.id} className="level-pill" onClick={() => navigate('/modulecreator-edit-level', { state: { levelId: lvl.id, moduleId: moduleData.id } })}>
              {lvl.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorModuleContent;