import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { teamContactInfo } from '../data/navigation';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Radio,
  Terminal,
  Crosshair,
  ArrowUpRight,
  Shield,
  Activity,
} from 'lucide-react';

export function ContactPage() {
  const contactReasons = [
    'COLLABORATE',
    'SPONSOR',
    'PARTNER',
    'TECHNICAL INQUIRY',
    'GENERAL CONTACT',
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    reason: 'COLLABORATE',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('IDLE'); // 'IDLE' | 'SENDING' | 'SUCCESS'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReasonSelect = (reason) => {
    setFormData((prev) => ({ ...prev, reason }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('SENDING');
    setTimeout(() => {
      setFormStatus('SUCCESS');
    }, 1200);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <PageHero
        badge="IK-04 // MISSION COMMUNICATION INTERFACE"
        title="BUILD THE NEXT"
        highlight="FLIGHT."
        subtitle="Connect directly with the Ignite Knights 4.0 autonomous aerial systems engineering cohort for hardware sponsorships, academic research, and technical collaboration."
        telemetry="UPLINK STATUS : ACTIVE // 4.0 COMMUNICATION PROTOCOL"
      >
        <div className="mt-2">
          <GenerationBadge variant="current" size="sm" />
        </div>
      </PageHero>

      <div className="container py-10">
        <div className="contact-mission-layout">
          {/* LEFT: Official Command Post Details */}
          <div className="contact-details-panel">
            <div className="command-post-card corner-bracket-box">
              <div className="post-header">
                <div className="flex items-center gap-2">
                  <span className="status-dot active"></span>
                  <span className="tech-label text-red">COMMAND POST & LAB</span>
                </div>
                <span className="font-mono text-xs text-gray-500">{teamContactInfo.coordinates}</span>
              </div>

              <h2 className="post-institution-title text-white font-bold text-xl mt-3">
                SAIRAM INSTITUTION CAMPUS
              </h2>
              <p className="post-desc text-xs text-gray-300 mt-1 leading-relaxed">
                Avionics synthesis, carbon-fiber composite layup bay, and test-bench hardware facilities located at Sairam Institution, Chennai.
              </p>

              {/* Direct Communication Channels */}
              <div className="post-channels-list mt-6 space-y-4">
                <div className="channel-row flex items-start gap-3">
                  <div className="channel-icon-box">
                    <Mail size={16} className="text-red" />
                  </div>
                  <div>
                    <span className="channel-lbl font-mono text-xs text-gray-500 block">OFFICIAL EMAIL</span>
                    <a href={`mailto:${teamContactInfo.email}`} className="channel-val font-mono text-sm text-white hover:text-red">
                      {teamContactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="channel-row flex items-start gap-3">
                  <div className="channel-icon-box">
                    <Phone size={16} className="text-red" />
                  </div>
                  <div>
                    <span className="channel-lbl font-mono text-xs text-gray-500 block">PRIMARY TELEPHONE (LEAD)</span>
                    <a href={`tel:${teamContactInfo.phonePrimary}`} className="channel-val font-mono text-sm text-white hover:text-red">
                      {teamContactInfo.phonePrimary}
                    </a>
                  </div>
                </div>

                <div className="channel-row flex items-start gap-3">
                  <div className="channel-icon-box">
                    <Phone size={16} className="text-red" />
                  </div>
                  <div>
                    <span className="channel-lbl font-mono text-xs text-gray-500 block">SECONDARY TELEPHONE (LAB)</span>
                    <a href={`tel:${teamContactInfo.phoneSecondary}`} className="channel-val font-mono text-sm text-white hover:text-red">
                      {teamContactInfo.phoneSecondary}
                    </a>
                  </div>
                </div>

                <div className="channel-row flex items-start gap-3">
                  <div className="channel-icon-box">
                    <MapPin size={16} className="text-red" />
                  </div>
                  <div>
                    <span className="channel-lbl font-mono text-xs text-gray-500 block">BASE COORDINATES</span>
                    <span className="channel-val font-mono text-xs text-gray-300 block">
                      {teamContactInfo.institution},<br />
                      {teamContactInfo.address}
                    </span>
                  </div>
                </div>

                <div className="channel-row flex items-start gap-3">
                  <div className="channel-icon-box">
                    <Clock size={16} className="text-red" />
                  </div>
                  <div>
                    <span className="channel-lbl font-mono text-xs text-gray-500 block">LAB HOURS</span>
                    <span className="channel-val font-mono text-xs text-gray-400">
                      {teamContactInfo.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Data Integrity Notice */}
              <div className="post-footer-notice font-mono text-xs text-gray-500 mt-6 pt-3 border-t border-white/5">
                NOTICE: Direct contact channels are verified for official collegiate and industrial inquiries.
              </div>
            </div>
          </div>

          {/* RIGHT: Mission Dispatch Form */}
          <div className="contact-form-panel">
            <div className="mission-form-card corner-bracket-box">
              <div className="form-card-header">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-red" />
                  <span className="tech-label text-red">TRANSMISSION UPLINK</span>
                </div>
                <span className="font-mono text-xs text-gray-500">FORMAT: ENCRYPTED RF FORM</span>
              </div>

              {formStatus === 'SUCCESS' ? (
                <div className="form-success-state py-12 text-center">
                  <CheckCircle2 size={42} className="text-red mx-auto mb-3" />
                  <h3 className="text-white font-mono font-bold text-lg">
                    TRANSMISSION DISPATCHED TO MISSION CONTROL
                  </h3>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto mt-2 leading-relaxed">
                    Your transmission has been logged into the 4.0 operations queue. A systems engineer will acknowledge receipt shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-aerospace btn-aerospace-outline mt-6"
                    onClick={() => {
                      setFormStatus('IDLE');
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        reason: 'COLLABORATE',
                        message: '',
                      });
                    }}
                  >
                    <span>TRANSMIT ANOTHER MESSAGE</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mission-form mt-4 space-y-4">
                  {/* Reason for Contact Selector Strip */}
                  <div>
                    <label className="tech-label text-gray-400 mb-2 block">
                      REASON FOR ENGAGEMENT:
                    </label>
                    <div className="reason-chips-grid">
                      {contactReasons.map((r) => (
                        <button
                          key={r}
                          type="button"
                          className={`reason-chip ${formData.reason === r ? 'active' : ''}`}
                          onClick={() => handleReasonSelect(r)}
                        >
                          <span className="chip-indicator"></span>
                          <span className="font-mono text-xs">{r}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="tech-label text-gray-400 mb-1 block">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. / Eng. / Name"
                        className="aerospace-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="tech-label text-gray-400 mb-1 block">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="operator@organization.com"
                        className="aerospace-input"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="form-group">
                    <label className="tech-label text-gray-400 mb-1 block">
                      ORGANIZATION / INSTITUTION
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Aerospace Lab / Company / University"
                      className="aerospace-input"
                    />
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="tech-label text-gray-400 mb-1 block">
                      TECHNICAL TRANSMISSION / MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline collaboration scope, hardware support, or inquiry parameters..."
                      className="aerospace-textarea"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'SENDING'}
                    className="btn-aerospace btn-aerospace-red w-full flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>
                      {formStatus === 'SENDING'
                        ? 'ENCRYPTING & TRANSMITTING...'
                        : 'DISPATCH TRANSMISSION TO 4.0 LAB'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
