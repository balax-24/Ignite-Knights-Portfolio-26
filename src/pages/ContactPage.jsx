import React, { useState } from 'react';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { teamContactInfo } from '../data/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    reason: 'COLLABORATE',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('IDLE'); // 'IDLE' | 'SENDING' | 'SUCCESS'

  const reasons = [
    'COLLABORATE',
    'SPONSOR',
    'PARTNER',
    'TECHNICAL INQUIRY',
    'GENERAL CONTACT',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('SENDING');
    setTimeout(() => {
      setFormStatus('SUCCESS');
    }, 800);
  };

  return (
    <div className="contact-editorial-page">
      {/* Editorial Page Header with Huge Typography */}
      <section className="editorial-page-header">
        <div className="container">
          <div className="editorial-header-category">
            <GenerationBadge variant="current" />
          </div>
          <h1 className="editorial-page-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}>
            LET'S BUILD<br />
            WHAT FLIES<br />
            <span className="text-red">NEXT.</span>
          </h1>
          <p className="editorial-page-lead">
            Connect with our engineering leads, laboratory directors, and systems architecture cohort.
          </p>
        </div>
      </section>

      <section className="container" style={{ marginBottom: '8rem' }}>
        <div className="contact-editorial-container">
          {/* Left Column: Direct Coordinates & Contact */}
          <div className="contact-meta-col">
            <div className="contact-meta-item">
              <span className="contact-meta-k">DIRECT EMAIL</span>
              <a href={`mailto:${teamContactInfo.email}`} className="contact-meta-v" style={{ fontWeight: 600 }}>
                {teamContactInfo.email}
              </a>
            </div>

            <div className="contact-meta-item">
              <span className="contact-meta-k">PHONE CONTACT</span>
              <span className="contact-meta-v">{teamContactInfo.phonePrimary}</span>
              <span className="contact-meta-v" style={{ color: 'var(--text-muted)' }}>{teamContactInfo.phoneSecondary}</span>
            </div>

            <div className="contact-meta-item">
              <span className="contact-meta-k">LABORATORY LOCATION</span>
              <span className="contact-meta-v">{teamContactInfo.institution}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{teamContactInfo.address}</span>
            </div>

            <div className="contact-meta-item">
              <span className="contact-meta-k">COORDINATES</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {teamContactInfo.coordinates}
              </span>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div>
            {formStatus === 'SUCCESS' ? (
              <div style={{ background: '#0a0a0a', border: '1px solid var(--border-subtle)', padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <CheckCircle2 size={32} className="text-red" />
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>TRANSMISSION RECEIVED</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  Thank you for contacting Ignite Knights 4.0. Our systems coordination team has logged your inquiry and will respond within 24 hours.
                </p>
                <button
                  className="btn-aerospace btn-aerospace-outline"
                  style={{ marginTop: '1rem', width: 'fit-content' }}
                  onClick={() => {
                    setFormStatus('IDLE');
                    setFormData({ name: '', email: '', organization: '', reason: 'COLLABORATE', message: '' });
                  }}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form className="contact-editorial-form" onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <span className="form-label-editorial">SELECT PURPOSE</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {reasons.map((r) => (
                      <button
                        type="button"
                        key={r}
                        className={`team-filter-btn ${formData.reason === r ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, reason: r })}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-field-editorial">
                  <label htmlFor="name" className="form-label-editorial">NAME</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input-editorial"
                    placeholder="Your Full Name"
                  />
                </div>

                <div className="form-field-editorial">
                  <label htmlFor="email" className="form-label-editorial">EMAIL</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input-editorial"
                    placeholder="email@organization.com"
                  />
                </div>

                <div className="form-field-editorial">
                  <label htmlFor="organization" className="form-label-editorial">ORGANIZATION</label>
                  <input
                    id="organization"
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="form-input-editorial"
                    placeholder="Company, University, or Institution"
                  />
                </div>

                <div className="form-field-editorial">
                  <label htmlFor="message" className="form-label-editorial">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input-editorial form-textarea-editorial"
                    placeholder="Describe your inquiry, project scope, or proposed collaboration..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'SENDING'}
                  className="btn-aerospace btn-aerospace-primary"
                  style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
                >
                  <span>{formStatus === 'SENDING' ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
