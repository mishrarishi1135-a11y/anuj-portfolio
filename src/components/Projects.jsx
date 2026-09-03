import React, { useState } from 'react';
import { ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import { Github } from './Icons';

const Projects = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories list derived dynamically from projects
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A showcase of my systems, machine learning workflows, and full-stack web applications.
        </p>

        {/* Categories Tab Selector */}
        <div className="projects-filter-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image-wrapper">
                <img
                  src={project.imageUrl || 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80'}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="project-category-badge">{project.category}</div>
              </div>

              <div className="project-content">
                <h3 className="project-card-title">{project.title}</h3>
                
                {/* Tech Stack */}
                <div className="project-tech-list">
                  {project.techStack.split(',').map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <p className="project-desc">{project.description}</p>

                {/* Project Links */}
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-item"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-item"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="no-projects-found glass-card flex-center">
              <FolderGit2 size={36} className="no-projects-icon" />
              <p>No projects found in this category. Access the Admin Dashboard to add some!</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .projects-filter-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-tab-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-light);
          padding: 8px 20px;
          border-radius: 9999px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-tab-btn:hover, .filter-tab-btn.active {
          color: var(--text-primary);
          background: rgba(59, 130, 246, 0.1);
          border-color: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          min-height: 250px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0; /* Clear default card padding */
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.01);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-category-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(8, 9, 11, 0.85);
          border: 1px solid var(--border-light);
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--secondary);
          backdrop-filter: blur(4px);
        }

        .project-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 16px;
        }

        .project-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-badge {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .project-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          flex-grow: 1;
        }

        .project-links {
          display: flex;
          gap: 16px;
          border-top: 1px solid var(--border-light);
          padding-top: 16px;
        }

        .project-link-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .project-link-item:hover {
          color: var(--primary);
        }

        .no-projects-found {
          grid-column: 1 / -1;
          flex-direction: column;
          padding: 60px;
          text-align: center;
          gap: 16px;
          color: var(--text-secondary);
        }

        .no-projects-icon {
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
