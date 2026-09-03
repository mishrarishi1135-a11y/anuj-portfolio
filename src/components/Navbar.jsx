import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert, Code, User, GraduationCap, Briefcase, Mail } from 'lucide-react';

const Navbar = ({ onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for styling navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 70; // Offset for sticky navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container container">
          <a href="#" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#')}>
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">ANUJ</span>
            <span className="logo-slash">/</span>
            <span className="logo-bracket">&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="navbar-link-item"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="navbar-actions">
            <button 
              className="admin-badge-btn" 
              onClick={onOpenAdmin}
              title="Admin Portal - Manage Projects"
            >
              <ShieldAlert className="admin-icon" size={18} />
              <span className="admin-text">Admin</span>
            </button>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name} className="mobile-menu-item">
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="mobile-menu-link-item"
                >
                  <Icon size={20} className="mobile-link-icon" />
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
          <li className="mobile-menu-item pt-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="btn btn-secondary mobile-admin-btn"
            >
              <ShieldAlert size={18} />
              <span>Admin Portal</span>
            </button>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          z-index: 1000;
          display: flex;
          align-items: center;
          transition: all var(--transition-normal);
          border-bottom: 1px solid transparent;
        }

        .navbar-scrolled {
          background: rgba(8, 9, 11, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-light);
          height: 65px;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .navbar-logo {
          font-family: var(--font-headings);
          font-weight: 800;
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          gap: 2px;
          cursor: pointer;
        }

        .logo-bracket {
          color: var(--primary);
          font-weight: 900;
        }

        .logo-name {
          color: var(--text-primary);
          letter-spacing: 1px;
        }

        .logo-slash {
          color: var(--secondary);
        }

        .navbar-links {
          display: flex;
          list-style: none;
          gap: 32px;
        }

        .navbar-link-item {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: var(--transition-fast);
          position: relative;
          padding: 6px 0;
        }

        .navbar-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, var(--primary), var(--secondary));
          transition: var(--transition-fast);
        }

        .navbar-link-item:hover {
          color: var(--text-primary);
        }

        .navbar-link-item:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .admin-badge-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent);
          border: 1px solid rgba(139, 92, 246, 0.2);
          padding: 6px 14px;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .admin-badge-btn:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: var(--accent);
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.25);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: rgba(8, 9, 11, 0.98);
          border-left: 1px solid var(--border-light);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 100px 32px 32px 32px;
          transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -10px 0 30px rgba(0,0,0,0.5);
          backdrop-filter: blur(20px);
        }

        .mobile-menu-overlay.open {
          right: 0;
        }

        .mobile-menu-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .mobile-menu-link-item {
          display: flex;
          align-items: center;
          gap: 16px;
          color: var(--text-secondary);
          font-size: 1.1rem;
          font-weight: 600;
          padding: 8px 0;
          transition: var(--transition-fast);
        }

        .mobile-menu-link-item:hover {
          color: var(--text-primary);
          transform: translateX(5px);
        }

        .mobile-link-icon {
          color: var(--primary);
        }

        .mobile-admin-btn {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 10px;
          background: rgba(139, 92, 246, 0.15);
          border-color: var(--accent);
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }
          .admin-badge-btn {
            display: none; /* Hide desktop admin button on mobile */
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
