import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { teamContactInfo } from '../data/navigation';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Radio, Terminal, AlertCircle } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'Collaboration / Inquiry',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('IDLE'); // 'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('SENDING');

    // Simulate reliable transmission / processing
    setTimeout(() => {
      setFormStatus('SUCCESS');
    }, 1200);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <PageHero
        badge="TRANSMISSION CHANNEL // DIRECT ACCESS"
        title="LET'S BUILD"
        highlight="WHAT FLIES NEXT."
        subtitle="Interested in collaborating with our team, supporting our work, discussing a project or connecting with us? Reach out directly to our mission control."
        telemetry="UPLINK STATUS : ACTIVE // ENCRYPTED CONTACT INTERFACE"
      />

      {/* Main Contact Grid */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-split">
            {/* Left Column: Official Contact Metadata */}
            <div className="contact-info-col">
              <div className="contact-info-card corner-bracket-box">
                <div className="info-card-header">
                  <div className="flex items-center gap-2">
                    <span className="status-dot active pulse"></span>
                    <span className="tech-label tech-label-red">COMMAND HEADQUARTERS</span>
                  </div>
                  <span className="tech-label">CHENNAI, IN</span>
                </div>

                <h2 className="info-card-heading">
                  SAIRAM INSTITUTION CAMPUS
                </h2>
                <p className="info-card-sub">
                  Our avionics laboratory, composite fabrication workshop, and telemetry command
                  center are situated at Sairam Institution, West Tambaram, Chennai.
                </p>

                <div className="contact-channels-list">
                  {/* Phone Primary */}
                  <div className="channel-box">
                    <Phone size={18} className="text-red flex-shrink-0" />
                    <div className="channel-content">
                      <span className="channel-label">PRIMARY TELEPHONE (LEAD)</span>
                      <a href={`tel:${teamContactInfo.phonePrimary}`} className="channel-value">
                        {teamContactInfo.phonePrimary}
                      </a>
                    </div>
                  </div>

                  {/* Phone Secondary */}
                  <div className="channel-box">
                    <Phone size={18} className="text-red flex-shrink-0" />
                    <div className="channel-content">
                      <span className="channel-label">SECONDARY TELEPHONE (OPS)</span>
                      <a href={`tel:${teamContactInfo.phoneSecondary}`} className="channel-value">
                        {teamContactInfo.phoneSecondary}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="channel-box">
                    <Mail size={18} className="text-red flex-shrink-0" />
                    <div className="channel-content">
                      <span className="channel-label">ELECTRONIC DISPATCH</span>
                      <a href={`mailto:${teamContactInfo.email}`} className="channel-value">
                        {teamContactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="channel-box">
                    <MapPin size={20} className="text-red flex-shrink-0" />
                    <div className="channel-content">
                      <span className="channel-label">FACILITY LOCATION</span>
                      <span className="channel-value">
                        {teamContactInfo.institution},<br />
                        {teamContactInfo.address}
                      </span>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="channel-box">
                    <Clock size={18} className="text-red flex-shrink-0" />
                    <div className="channel-content">
                      <span className="channel-label">COMMAND POST AVAILABILITY</span>
                      <span className="channel-value">{teamContactInfo.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="contact-coords-bar">
                  <span className="tech-label">GPS COORDS: 12.9249° N, 80.0543° E</span>
                  <span className="tech-label tech-label-red">GRID: TAMBARAM-44</span>
                </div>
              </div>
            </div>

            {/* Right Column: Mission Contact Transmission Form */}
            <div className="contact-form-col">
              <div className="contact-form-card corner-bracket-box">
                <div className="form-card-header">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-red" />
                    <span className="tech-label tech-label-red">DISPATCH TRANSMISSION</span>
                  </div>
                  <span className="tech-label">PACKET : FORM_MSG</span>
                </div>

                {formStatus === 'SUCCESS' ? (
                  <div className="form-success-state">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={48} className="text-green" />
                    </div>
                    <h3 className="success-title">TRANSMISSION RECEIVED</h3>
                    <p className="success-desc">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your message
                      has been logged into our telemetry dispatch system. Our team leads will review
                      and respond within 24 hours.
                    </p>
                    <button
                      className="btn-aerospace btn-aerospace-secondary mt-6"
                      onClick={() => {
                        setFormStatus('IDLE');
                        setFormData({
                          name: '',
                          email: '',
                          organization: '',
                          subject: 'Collaboration / Inquiry',
                          message: '',
                        });
                      }}
                    >
                      SEND ANOTHER TRANSMISSION
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form-body">
                    {/* Full Name */}
                    <div className="form-field-group">
                      <label htmlFor="name" className="form-field-label">
                        FULL NAME <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Reynolds"
                        className="aerospace-input"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="form-field-group">
                      <label htmlFor="email" className="form-field-label">
                        EMAIL ADDRESS <span className="text-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@aerospace.org"
                        className="aerospace-input"
                      />
                    </div>

                    {/* Organization */}
                    <div className="form-field-group">
                      <label htmlFor="organization" className="form-field-label">
                        ORGANIZATION / INSTITUTION
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Sairam / Aerospace Corp / Autonomous Lab"
                        className="aerospace-input"
                      />
                    </div>

                    {/* Message */}
                    <div className="form-field-group">
                      <label htmlFor="message" className="form-field-label">
                        TRANSMISSION CONTENT <span className="text-red">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your inquiry, sponsorship interest, or collaboration proposal..."
                        className="aerospace-textarea"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === 'SENDING'}
                      className="btn-aerospace btn-aerospace-primary form-submit-btn"
                    >
                      {formStatus === 'SENDING' ? (
                        <>
                          <Radio size={16} className="animate-spin text-white" />
                          <span>ENCRYPTING & DISPATCHING...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE →</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>

                    <p className="form-response-note">
                      We typically respond within 24 hours during standard business days.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
