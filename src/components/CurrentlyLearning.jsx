import React from 'react';
import { BookOpen } from 'lucide-react';
import { profileData } from '../data/profileData';

const CurrentlyLearning = () => {
  return (
    <section className="section" id="currently-learning">
      <div className="container">
        <h2 className="section-title">Currently Learning</h2>
        <p className="section-subtitle">
          Active areas of academic coursework, self-study, and practical engineering skills.
        </p>

        <div className="currently-learning-card glass-card">
          <div className="learning-card-header">
            <BookOpen size={20} className="learning-header-icon" />
            <h3>Focus Topics</h3>
          </div>
          
          <div className="learning-badge-grid">
            {profileData.currentlyLearning.map((topic, idx) => (
              <span key={idx} className="learning-pill">
                <span className="learning-pill-indicator"></span>
                <span>{topic}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .currently-learning-card {
          padding: 32px;
          background: rgba(18, 20, 26, 0.45);
        }

        .learning-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 12px;
        }

        .learning-header-icon {
          color: var(--secondary);
        }

        .learning-card-header h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
          font-weight: 700;
        }

        .learning-badge-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .learning-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-light);
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .learning-pill:hover {
          background: rgba(6, 182, 212, 0.05);
          border-color: var(--secondary);
          color: var(--text-primary);
          transform: translateY(-2px);
          box-shadow: 0 0 10px var(--secondary-glow);
        }

        .learning-pill-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--secondary);
        }
      `}</style>
    </section>
  );
};

export default CurrentlyLearning;
