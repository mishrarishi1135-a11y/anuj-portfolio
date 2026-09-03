import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { profileData } from '../data/profileData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);

    // Simulate backend request submission delay
    setTimeout(() => {
      // Get existing messages
      const existingMsg = JSON.parse(localStorage.getItem('anuj_portfolio_messages') || '[]');
      const newMsg = {
        id: `msg-${Date.now()}`,
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
        ...formData
      };
      
      // Save message
      localStorage.setItem('anuj_portfolio_messages', JSON.stringify([newMsg, ...existingMsg]));

      setSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          I'm always interested in learning, building, collaborating, and exploring new opportunities.
        </p>

        <div className="contact-grid">
          {/* Left Column: Details & Social Buttons */}
          <div className="contact-info-side">
            <h3 className="contact-side-title text-gradient">Get In Touch</h3>
            <p className="contact-description">
              Have a question or want to work together? Feel free to drop a message through the form, or reach out directly on professional networks.
            </p>

            <div className="contact-details-list">
              <a href={`mailto:${profileData.contact.email}`} className="contact-detail-card glass-card">
                <Mail className="detail-icon text-cyan" size={20} />
                <div className="detail-text">
                  <h4>Email</h4>
                  <p>{profileData.contact.email}</p>
                </div>
              </a>
              
              <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-detail-card glass-card">
                <Linkedin className="detail-icon text-blue" size={20} />
                <div className="detail-text">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/anuj-mishra</p>
                </div>
              </a>

              <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="contact-detail-card glass-card">
                <Github className="detail-icon text-violet" size={20} />
                <div className="detail-text">
                  <h4>GitHub</h4>
                  <p>github.com/anuj-mishra</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-side">
            <div className="contact-form-card glass-card">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Anuj Mishra"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="anuj@example.com"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Collaboration opportunity"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="form-control"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full send-message-btn"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="contact-success-view">
                  <CheckCircle2 size={48} className="success-check-icon animate-pulse-scale" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Your message has been saved successfully. I will get back to you shortly.</p>
                  
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="btn btn-secondary mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          margin-top: 20px;
        }

        .contact-side-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .contact-description {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-detail-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          transition: all var(--transition-fast);
        }

        .contact-detail-card:hover {
          transform: translateY(-2px) translateX(4px);
        }

        .detail-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .detail-icon.text-cyan { color: var(--secondary); }
        .detail-icon.text-blue { color: var(--primary); }
        .detail-icon.text-violet { color: var(--accent); }

        .detail-text h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .detail-text p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .contact-form-card {
          padding: 32px;
          background: rgba(18, 20, 26, 0.45);
        }

        .send-message-btn {
          gap: 8px;
          justify-content: center;
        }

        .contact-success-view {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 10px;
          gap: 16px;
        }

        .success-check-icon {
          color: #10b981;
        }

        .contact-success-view h3 {
          font-size: 1.4rem;
          color: var(--text-primary);
        }

        .contact-success-view p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 320px;
        }

        @keyframes pulseScale {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .animate-pulse-scale {
          animation: pulseScale 2s infinite ease-in-out;
        }

        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
