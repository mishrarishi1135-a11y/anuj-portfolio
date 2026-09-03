import React from 'react';
import { Award, Zap, Code, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profileData';

const Highlights = () => {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Award size={20} className="highlight-icon text-cyan" />;
      case 1:
        return <Award size={20} className="highlight-icon text-blue" />;
      case 2:
        return <Award size={20} className="highlight-icon text-violet" />;
      default:
        return <Zap size={20} className="highlight-icon text-emerald" />;
    }
  };

  return (
    <section className="section" id="highlights">
      <div className="container">
        <h2 className="section-title font-bold">Key Highlights</h2>
        <p className="section-subtitle">
          Academic achievements, grades, and skill milestones at a glance.
        </p>

        <div className="highlights-grid">
          {profileData.highlights.map((item, idx) => (
            <div key={idx} className="highlight-card glass-card">
              <div className="highlight-header">
                {getIcon(idx)}
                <span className="highlight-pill">Milestone</span>
              </div>
              <div className="highlight-value-container">
                <span className="highlight-number text-gradient">
                  {item.value}
                </span>
                <span className="highlight-suffix">
                  {item.suffix}
                </span>
              </div>
              <p className="highlight-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .highlight-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }

        .highlight-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 12px;
        }

        .highlight-icon.text-cyan {
          color: var(--secondary);
        }

        .highlight-icon.text-blue {
          color: var(--primary);
        }

        .highlight-icon.text-violet {
          color: var(--accent);
        }

        .highlight-icon.text-emerald {
          color: #10b981;
        }

        .highlight-pill {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          padding: 3px 8px;
          border-radius: 9999px;
        }

        .highlight-value-container {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 2px;
          margin-top: 10px;
        }

        .highlight-number {
          font-size: 3.25rem;
          font-weight: 800;
          font-family: var(--font-headings);
          line-height: 1;
        }

        .highlight-suffix {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .highlight-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
          line-height: 1.4;
        }

        @media (max-width: 992px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Highlights;
