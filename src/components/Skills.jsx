import React from 'react';
import { Code2, Globe, Cpu, Wrench } from 'lucide-react';
import { profileData } from '../data/profileData';

const Skills = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'programming':
        return <Code2 className="category-header-icon" size={24} style={{ color: 'var(--primary)' }} />;
      case 'webDevelopment':
        return <Globe className="category-header-icon" size={24} style={{ color: 'var(--secondary)' }} />;
      case 'dataAndAI':
        return <Cpu className="category-header-icon" size={24} style={{ color: 'var(--accent)' }} />;
      case 'productivityTools':
        return <Wrench className="category-header-icon" size={24} style={{ color: '#10b981' }} />;
      default:
        return <Code2 className="category-header-icon" size={24} />;
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'programming':
        return 'Programming';
      case 'webDevelopment':
        return 'Web Development';
      case 'dataAndAI':
        return 'Data & AI';
      case 'productivityTools':
        return 'Productivity & Tools';
      default:
        return category;
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to design and construct applications.
        </p>

        <div className="skills-grid">
          {Object.keys(profileData.skills).map((categoryKey) => (
            <div key={categoryKey} className="skills-category-card glass-card">
              <div className="category-header">
                {getCategoryIcon(categoryKey)}
                <h3 className="category-title">{getCategoryLabel(categoryKey)}</h3>
              </div>
              
              <div className="skills-list">
                {profileData.skills[categoryKey].map((skill, index) => (
                  <div key={index} className="skill-badge-wrapper">
                    <span className="skill-badge">
                      <span className="skill-dot"></span>
                      <span className="skill-name">{skill.name}</span>
                    </span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .skills-category-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 12px;
        }

        .category-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-badge-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-light);
          transition: all var(--transition-fast);
          flex-grow: 1;
          min-width: calc(50% - 6px);
        }

        .skill-badge-wrapper:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .skill-badge {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .skill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }

        .skills-category-card:nth-child(2) .skill-dot {
          background: var(--secondary);
        }

        .skills-category-card:nth-child(3) .skill-dot {
          background: var(--accent);
        }

        .skills-category-card:nth-child(4) .skill-dot {
          background: #10b981;
        }

        .skill-name {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .skill-level {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .skill-badge-wrapper {
            min-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
