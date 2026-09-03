import React from 'react';
import { profileData } from '../data/profileData';

const LearningJourney = () => {
  return (
    <section className="section" id="learning-journey">
      <div className="container">
        <h2 className="section-title">My Learning Journey</h2>
        <p className="section-subtitle">
          A visual representation of my skill acquisition, technical depth, and current execution focus.
        </p>

        <div className="journey-grid">
          {profileData.learningJourney.map((item, idx) => (
            <div key={idx} className="journey-card glass-card">
              <div className="journey-info">
                <span className="journey-category">{item.category}</span>
                <span className="journey-percentage" style={{ color: item.color }}>{item.progress}%</span>
              </div>
              
              <div className="progress-bar-track">
                <div 
                  className="progress-bar-fill" 
                  style={{ 
                    width: `${item.progress}%`,
                    background: `linear-gradient(to right, ${item.color}, var(--secondary))`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .journey-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .journey-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .journey-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .journey-category {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .journey-percentage {
          font-size: 1.1rem;
          font-weight: 700;
          font-family: var(--font-headings);
        }

        .progress-bar-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 9999px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 768px) {
          .journey-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default LearningJourney;
