import React from 'react';
import { Cpu, Terminal, Compass, GraduationCap } from 'lucide-react';
import { profileData } from '../data/profileData';

const About = () => {
  // Map icon names to components
  const getIcon = (title) => {
    switch (title) {
      case 'Engineering Student':
        return <GraduationCap className="about-card-icon text-blue" size={24} />;
      case 'Technology Enthusiast':
        return <Cpu className="about-card-icon text-cyan" size={24} />;
      case 'Problem Solver':
        return <Terminal className="about-card-icon text-violet" size={24} />;
      default:
        return <Compass className="about-card-icon text-purple" size={24} />;
    }
  };

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Bridging hardware fundamentals with modern computer science, data, and AI systems.
        </p>

        <div className="about-grid">
          {/* Left Column: Bio Text */}
          <div className="about-text-column">
            <h3 className="about-heading text-gradient">Who I Am</h3>
            <p className="about-paragraph">{profileData.bio}</p>
            <p className="about-paragraph">
              My engineering background in **Electronics & Communication Engineering** provides me with a solid understanding of system architecture, hardware-software integration, and digital logic. At the same time, my self-driven projects in **React, Spring Boot, Python, and Machine Learning** demonstrate my versatility as a software designer ready for complex industry problems.
            </p>
            <p className="about-paragraph">
              Whether building microservices, deploying LLM agents, analyzing dataset distributions, or modeling digital systems, I approach every challenge with engineering rigor and a passion for high-quality, clean code.
            </p>
          </div>

          {/* Right Column: Attribute Cards */}
          <div className="about-cards-column">
            <div className="about-illustration-card glass-card">
              <div className="card-mesh"></div>
              <h3 className="illustration-card-title">Anuj's Profile</h3>
              
              <div className="about-badge-list">
                {profileData.aboutCards.map((card, idx) => (
                  <div key={idx} className="about-attribute-item">
                    <div className="icon-wrapper">
                      {getIcon(card.title)}
                    </div>
                    <div className="attribute-info">
                      <h4>{card.title}</h4>
                      <p>{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
          margin-top: 20px;
        }

        .about-heading {
          font-size: 1.8rem;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .about-paragraph {
          color: var(--text-secondary);
          font-size: 1.05rem;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .about-paragraph strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .about-illustration-card {
          position: relative;
          padding: 32px;
          overflow: hidden;
          background: rgba(18, 20, 26, 0.5);
        }

        .card-mesh {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        .illustration-card-title {
          font-size: 1.4rem;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-primary);
        }

        .about-badge-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-attribute-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: all var(--transition-fast);
        }

        .about-attribute-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.08);
          transform: translateX(4px);
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
        }

        .about-card-icon.text-blue {
          color: var(--primary);
        }
        
        .about-card-icon.text-cyan {
          color: var(--secondary);
        }

        .about-card-icon.text-violet {
          color: var(--accent);
        }

        .about-card-icon.text-purple {
          color: #d946ef;
        }

        .attribute-info h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .attribute-info p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
