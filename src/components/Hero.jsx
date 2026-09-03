import React from 'react';
import { Mail, ArrowDown, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { profileData } from '../data/profileData';

const Hero = () => {
  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section flex-center" id="home">
      {/* Visual Tech Overlays */}
      <div className="tech-grid"></div>
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      
      <div className="hero-container container animate-slide-up">
        <div className="hero-badge">
          <Sparkles size={14} className="badge-icon" />
          <span>Available for Internships</span>
        </div>

        <h1 className="hero-title">
          {profileData.name.split(' ').map((part, idx) => (
            <span key={idx} className={idx === 1 ? "text-gradient-purple" : ""}>
              {part}{' '}
            </span>
          ))}
        </h1>

        <h2 className="hero-subtitle">
          {profileData.title}
        </h2>
        
        <p className="hero-description">
          {profileData.tagline}
        </p>

        <div className="hero-buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => handleScrollTo('#skills')}
          >
            View My Skills
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => handleScrollTo('#education')}
          >
            Explore My Education
          </button>
        </div>

        <div className="hero-socials">
          <a 
            href={profileData.contact.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href={profileData.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={`mailto:${profileData.contact.email}`} 
            className="social-icon-btn"
            aria-label="Send Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => handleScrollTo('#about')}>
        <span className="scroll-text">Explore Portfolio</span>
        <ArrowDown size={16} className="arrow-bounce" />
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(to bottom, var(--bg-darker), var(--bg-dark));
          overflow: hidden;
          padding-top: var(--header-height);
        }

        .hero-container {
          text-align: center;
          position: relative;
          z-index: 10;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 24px;
          backdrop-filter: blur(8px);
        }

        .badge-icon {
          color: var(--secondary);
          animation: spinPulse 3s infinite linear;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 24px;
          max-width: 600px;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 620px;
          margin-bottom: 36px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }

        .hero-socials {
          display: flex;
          gap: 20px;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          z-index: 10;
          transition: var(--transition-fast);
        }

        .scroll-indicator:hover {
          color: var(--text-secondary);
        }

        .arrow-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-6px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        @keyframes spinPulse {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.75rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
          }
          .hero-description {
            font-size: 1rem;
            padding: 0 10px;
          }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 280px;
            gap: 12px;
          }
          .hero-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
