import React from 'react';
import { Link } from 'react-router-dom';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { missionsMeta, missionsData } from '../data/missions';
import { ArrowUpRight } from 'lucide-react';

export function MissionsPage() {
  return (
    <div className="missions-editorial-page">
      {/* Page Header */}
      <section className="editorial-page-header">
        <div className="container">
          <div className="editorial-header-category">
            <GenerationBadge variant="current" />
          </div>
          <h1 className="editorial-page-title">
            CURRENT MISSIONS<br />
            <span className="text-red">OPERATIONAL CHALLENGES</span>
          </h1>
          <p className="editorial-page-lead">
            {missionsMeta.description}
          </p>
        </div>
      </section>

      {/* Engineering Case Studies List */}
      <section className="container">
        <div className="missions-case-study-list" style={{ marginBottom: '6rem' }}>
          {missionsData.map((mission, idx) => (
            <div key={mission.id} className="mission-case-study-item">
              <div className="mission-meta-strip">
                <span className="mission-serial-tag">{mission.designation}</span>
                <span className="editorial-tag red-dot">{mission.status}</span>
              </div>

              <h2 className="mission-name-display">{mission.name}</h2>
              <p className="mission-objective-text">{mission.objective}</p>

              <div className="mission-specs-strip">
                <div className="mission-spec-field">
                  <span className="spec-k">OPERATIONAL CHALLENGE</span>
                  <p className="spec-v">{mission.challenge}</p>
                </div>
                <div className="mission-spec-field">
                  <span className="spec-k">TECHNICAL APPROACH</span>
                  <p className="spec-v">{mission.approach}</p>
                </div>
              </div>

              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span className="spec-k" style={{ display: 'block', marginBottom: '0.8rem' }}>SUBSYSTEM REQUIREMENTS</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {mission.technologies.map((tech) => (
                    <span key={tech} className="editorial-tag" style={{ background: '#121212', padding: '0.35rem 0.8rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated 3.0 Historical Competition Callout */}
        <div className="archive-hero-banner">
          <span className="archive-watermark-tag">PREVIOUS GENERATION ARCHIVE</span>
          <h3 className="archive-banner-title">LOOKING FOR 3.0 COMPETITIONS?</h3>
          <p className="archive-banner-desc">
            All previous generation competition projects—including NIDAR 2026, AERATHON 2026, and our Top 10 national ranking at SAE ADDC 2025—belong strictly to Ignite Knights 3.0 and are cataloged inside the historical archive.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/archive" className="editorial-text-link" style={{ fontSize: '1.05rem' }}>
              <span>VIEW 3.0 COMPETITIONS ARCHIVE</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
