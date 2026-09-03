import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { profileData } from '../data/profileData';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3 className="footer-name">{profileData.name}</h3>
          <p className="footer-title">{profileData.title}</p>
        </div>

        <div className="footer-socials">
          <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profileData.contact.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2026 {profileData.name}. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: #08090b;
          border-top: 1px solid var(--border-light);
          padding: 40px 0;
          color: var(--text-secondary);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }

        .footer-name {
          font-size: 1.15rem;
          color: var(--text-primary);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .footer-title {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-socials {
          display: flex;
          gap: 16px;
        }

        .footer-socials a {
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .footer-socials a:hover {
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        .footer-copyright {
          font-size: 0.8rem;
          color: var(--text-muted);
          border-top: 1px solid rgba(255, 255, 255, 0.02);
          width: 100%;
          padding-top: 20px;
          margin-top: 10px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
