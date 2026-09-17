import React from 'react';
import { Link } from 'react-router-dom';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { partnersMeta, partnerTracks, archived3Partners } from '../data/partners';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function PartnersPage() {
  return (
    <div className="partners-editorial-page">
      {/* Editorial Page Header */}
      <section className="editorial-page-header">
        <div className="container">
          <div className="editorial-header-category">
            <GenerationBadge variant="current" />
          </div>
          <h1 className="editorial-page-title">
            PARTNERS &<br />
            <span className="text-red">COLLABORATION</span>
          </h1>
          <p className="editorial-page-lead">
            {partnersMeta.description}
          </p>
        </div>
      </section>

      <section className="container">
        {/* Partnership Collaboration Tracks */}
        <div style={{ marginBottom: '6rem' }}>
          <div className="aircraft-intro-header">
            <div>
              <span className="editorial-num">01</span>
              <h2 className="section-title-editorial">COLLABORATION TRACKS</h2>
              <span className="editorial-tag red-dot">4.0 SPONSORSHIP OPPORTUNITIES</span>
            </div>
            <Link to="/contact" className="editorial-text-link">
              <span>INQUIRE ABOUT PARTNERSHIP</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="partner-tracks-editorial-grid">
            {partnerTracks.map((track) => (
              <div key={track.code} className="partner-track-card">
                <span className="track-code">{track.code}</span>
                <h3 className="track-title">{track.tier}</h3>
                <p className="track-desc">{track.description}</p>
                <div className="editorial-divider" style={{ margin: '1.5rem 0' }}></div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {track.benefits.map((b, idx) => (
                    <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      · {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3.0 Historical Technology Sponsors Archive Section */}
        <div className="archive-hero-banner" style={{ marginBottom: '6rem' }}>
          <span className="archive-watermark-tag">HISTORICAL 3.0 SOFTWARE PARTNERS (2024 — 2026)</span>
          <h3 className="archive-banner-title">3.0 TECHNOLOGY ECOSYSTEM</h3>
          <p className="archive-banner-desc">
            Ignite Knights 3.0 was supported by 9 premier engineering software licenses that empowered our structural simulations, multi-layer PCB designs, and aerodynamic calculations.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            {archived3Partners.map((p) => (
              <div key={p.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', opacity: 0.85 }}>
                <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>
                  {p.name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888888' }}>
                  {p.role}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/archive" className="editorial-text-link">
              <span>EXPLORE 3.0 ARCHIVE →</span>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="section-block" style={{ borderTop: '1px solid var(--border-subtle)', textAlign: 'center', padding: '6rem 0' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1rem' }}>
            BECOME A 4.0 PARTNER
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
            Join our flight testing program and support student-led autonomous aerospace robotics.
          </p>
          <Link to="/contact" className="btn-aerospace btn-aerospace-primary">
            <span>GET IN TOUCH</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
