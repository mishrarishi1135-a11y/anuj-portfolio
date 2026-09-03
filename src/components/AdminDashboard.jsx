import React, { useState } from 'react';
import { X, Lock, Plus, Edit2, Trash2, Download, RefreshCw, KeyRound } from 'lucide-react';
import { profileData } from '../data/profileData';

const AdminDashboard = ({ isOpen, onClose, projects, onUpdateProjects, onResetProjects }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  
  // Form states for creating/editing projects
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    category: 'Web Development',
    techStack: '',
    description: '',
    demoLink: '',
    githubLink: '',
    imageUrl: ''
  });

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === profileData.contact.adminPassword) {
      setIsAuthenticated(true);
      setAuthError('');
      setPassword('');
    } else {
      setAuthError('Incorrect admin password. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.description || !formData.techStack) {
      alert('Please fill out all required fields.');
      return;
    }

    if (isEditing) {
      // Edit existing
      const updated = projects.map(p => 
        p.id === editId ? { ...formData, id: editId } : p
      );
      onUpdateProjects(updated);
      setIsEditing(false);
      setEditId(null);
    } else {
      // Add new
      const newProject = {
        ...formData,
        id: `proj-${Date.now()}`
      };
      onUpdateProjects([...projects, newProject]);
    }

    // Reset Form
    setFormData({
      title: '',
      category: 'Web Development',
      techStack: '',
      description: '',
      demoLink: '',
      githubLink: '',
      imageUrl: ''
    });
  };

  const handleEditSelect = (project) => {
    setIsEditing(true);
    setEditId(project.id);
    setFormData({
      title: project.title,
      category: project.category,
      techStack: project.techStack,
      description: project.description,
      demoLink: project.demoLink || '',
      githubLink: project.githubLink || '',
      imageUrl: project.imageUrl || ''
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updated = projects.filter(p => p.id !== id);
      onUpdateProjects(updated);
      // Cancel edit if deleting the project currently being edited
      if (editId === id) {
        setIsEditing(false);
        setEditId(null);
        setFormData({
          title: '',
          category: 'Web Development',
          techStack: '',
          description: '',
          demoLink: '',
          githubLink: '',
          imageUrl: ''
        });
      }
    }
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify(projects, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'projects.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="admin-modal-backdrop flex-center">
      <div className="admin-modal-container glass-card">
        {/* Modal Header */}
        <div className="admin-modal-header">
          <div className="header-title-wrapper">
            <KeyRound size={20} className="header-accent-icon" />
            <h2>Admin Control Panel</h2>
          </div>
          <button className="admin-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="admin-modal-body">
          {!isAuthenticated ? (
            /* Login Overlay */
            <div className="admin-login-wrapper">
              <div className="login-lock-circle">
                <Lock size={32} className="login-lock-icon" />
              </div>
              <p className="login-instructions">
                Enter your administrative password to edit profile projects.
              </p>
              
              <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Enter admin password (default: admin123)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control text-center"
                    autoFocus
                  />
                </div>
                {authError && <p className="auth-error-msg">{authError}</p>}
                <button type="submit" className="btn btn-primary w-full mt-2">
                  Unlock Console
                </button>
              </form>
            </div>
          ) : (
            /* Main Admin Dashboard */
            <div className="admin-dashboard-layout">
              {/* Left Column: List existing projects & Global Actions */}
              <div className="admin-projects-list-side">
                <div className="side-header">
                  <h3>Project Catalog ({projects.length})</h3>
                  <div className="global-actions">
                    <button 
                      onClick={handleExportData} 
                      className="admin-action-btn flex-center"
                      title="Download updated projects JSON"
                    >
                      <Download size={16} />
                      <span>Export JSON</span>
                    </button>
                    <button 
                      onClick={onResetProjects} 
                      className="admin-action-btn danger flex-center"
                      title="Reset to default seed data"
                    >
                      <RefreshCw size={16} />
                      <span>Reset Defaults</span>
                    </button>
                  </div>
                </div>

                <div className="project-items-scroller">
                  {projects.map(proj => (
                    <div key={proj.id} className="admin-project-item">
                      <div className="item-text">
                        <span className="item-category-tag">{proj.category}</span>
                        <h4>{proj.title}</h4>
                      </div>
                      <div className="item-actions">
                        <button 
                          onClick={() => handleEditSelect(proj)}
                          className="item-btn edit"
                          title="Edit Project"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button 
                          onClick={() => handleDelete(proj.id)}
                          className="item-btn delete"
                          title="Delete Project"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {projects.length === 0 && (
                    <p className="no-items-placeholder">No projects uploaded yet. Add one on the right!</p>
                  )}
                </div>

                <div className="admin-dashboard-footer-info">
                  <p>💡 <strong>Tip:</strong> After making changes, click <strong>Export JSON</strong> to download your updated database file. You can replace the default static configuration file with this export for persistent cloud deployments.</p>
                </div>
              </div>

              {/* Right Column: Form Panel */}
              <div className="admin-form-side">
                <h3>{isEditing ? 'Modify Project' : 'Upload New Project'}</h3>
                
                <form onSubmit={handleFormSubmit} className="admin-form">
                  <div className="form-group">
                    <label className="form-label">Project Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="e.g. Spring Boot AI Agent"
                      required
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="form-control"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Data & AI">Data & AI</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Software Development">Software Development</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Tech Stack (comma separated) *</label>
                      <input
                        type="text"
                        name="techStack"
                        value={formData.techStack}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="React, Node.js, SQLite"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="form-control"
                      rows="4"
                      placeholder="Explain features, technical difficulties, and solutions..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Demo URL</label>
                      <input
                        type="url"
                        name="demoLink"
                        value={formData.demoLink}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="https://example.com/demo"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">GitHub URL</label>
                      <input
                        type="url"
                        name="githubLink"
                        value={formData.githubLink}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="https://github.com/your-username/repo"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preview Image URL</label>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="https://images.unsplash.com/... or blank for default"
                    />
                  </div>

                  <div className="form-submit-row">
                    {isEditing && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsEditing(false);
                          setEditId(null);
                          setFormData({
                            title: '',
                            category: 'Web Development',
                            techStack: '',
                            description: '',
                            demoLink: '',
                            githubLink: '',
                            imageUrl: ''
                          });
                        }}
                        className="btn btn-secondary"
                      >
                        Cancel
                      </button>
                    )}
                    <button type="submit" className="btn btn-primary flex-grow">
                      {isEditing ? 'Save Edits' : 'Deploy Project'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .admin-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(4, 5, 6, 0.85);
          backdrop-filter: blur(8px);
          z-index: 2000;
          padding: 24px;
        }

        .admin-modal-container {
          width: 100%;
          max-width: 1000px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
          background: #0f1013;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .admin-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-light);
        }

        .header-title-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .header-accent-icon {
          color: var(--accent);
        }

        .admin-modal-header h2 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .admin-close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .admin-close-btn:hover {
          color: var(--text-primary);
          transform: scale(1.1);
        }

        .admin-modal-body {
          flex-grow: 1;
          overflow-y: auto;
          padding: 24px;
        }

        /* Login view styles */
        .admin-login-wrapper {
          max-width: 400px;
          margin: 40px auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .login-lock-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: var(--accent);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
        }

        .login-instructions {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .login-form {
          width: 100%;
        }

        .auth-error-msg {
          color: #ef4444;
          font-size: 0.85rem;
          margin-top: 8px;
          font-weight: 500;
        }

        .w-full {
          width: 100%;
        }

        /* Dashboard layout styles */
        .admin-dashboard-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
          height: 100%;
        }

        .admin-projects-list-side {
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-right: 1px solid var(--border-light);
          padding-right: 24px;
        }

        .side-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .side-header h3, .admin-form-side h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .global-actions {
          display: flex;
          gap: 8px;
        }

        .admin-action-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          gap: 6px;
          transition: var(--transition-fast);
        }

        .admin-action-btn:hover {
          background: rgba(255, 255, 255, 0.07);
          color: var(--text-primary);
        }

        .admin-action-btn.danger:hover {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.3);
        }

        .project-items-scroller {
          flex-grow: 1;
          overflow-y: auto;
          max-height: 380px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 12px;
        }

        .admin-project-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .admin-project-item:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.06);
        }

        .item-text h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .item-category-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--secondary);
          text-transform: uppercase;
        }

        .item-actions {
          display: flex;
          gap: 6px;
        }

        .item-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 4px;
          border: 1px solid var(--border-light);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .item-btn.edit:hover {
          color: var(--primary);
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .item-btn.delete:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.3);
        }

        .no-items-placeholder {
          color: var(--text-muted);
          font-size: 0.85rem;
          text-align: center;
          padding: 20px 0;
        }

        .admin-dashboard-footer-info {
          background: rgba(139, 92, 246, 0.04);
          border: 1px solid rgba(139, 92, 246, 0.1);
          border-radius: 8px;
          padding: 12px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .admin-form-side {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .form-submit-row {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .flex-grow {
          flex-grow: 1;
        }

        @media (max-width: 850px) {
          .admin-dashboard-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .admin-projects-list-side {
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid var(--border-light);
            padding-bottom: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
