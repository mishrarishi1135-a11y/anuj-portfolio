import React from 'react';
import { Code, Brain, BarChart3, Cpu, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

const Exploring = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code size={24} className="exploring-icon text-blue" />;
      case 'Brain':
        return <Brain size={24} className="exploring-icon text-violet" />;
      case 'BarChart3':
        return <BarChart3 size={24} className="exploring-icon text-cyan" />;
      case 'Cpu':
        return <Cpu size={24} className="exploring-icon text-emerald" />;
      default:
        return <Sparkles size={24} className="exploring-icon" />;
    }
  };

  return (
    <section className="section" id="exploring">
      <div className="container">
        <h2 className="section-title">What I'm Exploring</h2>
        <p className="section-subtitle">
          Key focus areas in modern technology and engineering that I am actively diving into.
        </p>

        <div className="exploring-grid">
          {profileData.exploring.map((item, idx) => (
            <div key={idx} className="exploring-card glass-card">
              <div className="exploring-icon-wrapper">
                {getIcon(item.iconName)}
              </div>
              <h3 className="exploring-card-title">{item.title}</h3>
              <p className="exploring-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exploring-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .exploring-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .exploring-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
        }

        .exploring-icon.text-blue {
          color: var(--primary);
        }

        .exploring-icon.text-violet {
          color: var(--accent);
        }

        .exploring-icon.text-cyan {
          color: var(--secondary);
        }

        .exploring-icon.text-emerald {
          color: #10b981;
        }

        .exploring-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .exploring-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .exploring-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .exploring-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Exploring;
