import React from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { profileData } from '../data/profileData';

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic roadmap and educational foundations in science and engineering.
        </p>

        <div className="education-timeline-wrapper">
          <div className="timeline-line"></div>
          
          <div className="timeline-list">
            {profileData.education.map((item, idx) => (
              <div key={idx} className="timeline-item">
                {/* Timeline Connector Dot */}
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot">
                    <BookOpen size={14} className="dot-icon" />
                  </div>
                </div>
                
                {/* Timeline Card */}
                <div className="timeline-card-wrapper">
                  <div className="timeline-card glass-card">
                    <div className="timeline-card-header">
                      <div className="timeline-title-area">
                        <h3 className="timeline-degree">{item.degree}</h3>
                        <h4 className="timeline-institution">{item.institution}</h4>
                      </div>
                      
                      {item.grade && (
                        <div className="timeline-grade-badge">
                          <Award size={14} className="grade-icon" />
                          <span>{item.grade}</span>
                        </div>
                      )}
                    </div>

                    <div className="timeline-meta">
                      <div className="meta-item">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="timeline-details">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .education-timeline-wrapper {
          position: relative;
          max-width: 850px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline-line {
          position: absolute;
          left: 31px;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(
            to bottom, 
            var(--primary), 
            var(--secondary) 50%, 
            var(--accent) 100%
          );
          opacity: 0.3;
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .timeline-item {
          display: flex;
          position: relative;
          width: 100%;
        }

        .timeline-dot-wrapper {
          width: 64px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 24px;
          z-index: 10;
        }

        .timeline-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-darker);
          border: 2px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
          transition: all var(--transition-fast);
        }

        .timeline-item:nth-child(2) .timeline-dot {
          border-color: var(--secondary);
          color: var(--secondary);
          box-shadow: 0 0 10px var(--secondary-glow);
        }

        .timeline-item:nth-child(3) .timeline-dot {
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .timeline-item:hover .timeline-dot {
          transform: scale(1.15);
          background: var(--primary);
          color: #000;
        }

        .timeline-item:nth-child(2):hover .timeline-dot {
          background: var(--secondary);
          color: #000;
        }

        .timeline-item:nth-child(3):hover .timeline-dot {
          background: var(--accent);
          color: #fff;
        }

        .timeline-card-wrapper {
          flex-grow: 1;
        }

        .timeline-card {
          padding: 24px;
          position: relative;
        }

        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .timeline-degree {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .timeline-institution {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .timeline-grade-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .timeline-item:nth-child(1) .timeline-grade-badge {
          background: rgba(6, 182, 212, 0.1);
          color: var(--secondary);
          border-color: rgba(6, 182, 212, 0.2);
        }

        .timeline-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .timeline-details {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }
          .timeline-dot-wrapper {
            width: 42px;
          }
          .timeline-dot {
            width: 26px;
            height: 26px;
          }
          .dot-icon {
            width: 12px;
            height: 12px;
          }
          .timeline-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .timeline-grade-badge {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
