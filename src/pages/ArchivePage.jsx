import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GenerationBadge } from '../components/common/GenerationBadge';
import {
  archiveGenerationInfo,
  archive3Aircraft,
  archive3Achievements,
  archive3Competitions,
  archive3TeamMembers,
  archive3Mentors,
  archive3Trainees,
  archive3Sponsors,
  archive3Timeline,
} from '../data/archive';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function ArchivePage() {
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = [
    'ALL',
    '3.0 AIRCRAFT',
    '3.0 ACHIEVEMENTS',
    '3.0 COMPETITIONS',
    '3.0 TEAM',
    '3.0 SPONSORS',
    '3.0 TIMELINE',
  ];

  return (
    <div className="archive-editorial-page">
      {/* Editorial Page Header */}
      <section className="editorial-page-header">
        <div className="container">
          <div className="editorial-header-category">
            <GenerationBadge variant="archive" />
          </div>
          <h1 className="editorial-page-title">
            THE ARCHIVE<br />
            <span style={{ color: '#888888' }}>IGNITE KNIGHTS 3.0</span>
          </h1>
          <p className="editorial-page-lead">
            {archiveGenerationInfo.description}
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/" className="btn-aerospace btn-aerospace-primary">
              <span>RETURN TO CURRENT 4.0 GENERATION</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container">
        {/* Editorial Filter Tabs */}
        <div className="team-filter-bar">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`team-filter-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 1. 3.0 Aircraft Fleet */}
        {(activeTab === 'ALL' || activeTab === '3.0 AIRCRAFT') && (
          <div className="section-block" style={{ borderTop: 'none', paddingTop: '1rem' }}>
            <div className="aircraft-intro-header">
              <div>
                <span className="editorial-tag">HISTORICAL FLEET</span>
                <h2 className="section-title-editorial">3.0 AIRCRAFT PLATFORMS</h2>
              </div>
              <span className="editorial-tag">DECOMMISSIONED</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {archive3Aircraft.map((craft) => (
                <div key={craft.name} className="aircraft-spec-card">
                  <span className="editorial-tag">{craft.callSign} // {craft.year}</span>
                  <h3 className="aircraft-spec-name">{craft.name}</h3>
                  <p className="spec-item-desc">{craft.description}</p>
                  <div className="editorial-divider" style={{ margin: '1.2rem 0' }}></div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-faint)' }}>AIRFRAME:</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{craft.specs.airframe}</span>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-faint)' }}>PROPULSION:</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{craft.specs.propulsion}</span>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-faint)' }}>PAYLOAD:</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{craft.specs.payload}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. 3.0 Achievements */}
        {(activeTab === 'ALL' || activeTab === '3.0 ACHIEVEMENTS') && (
          <div className="section-block">
            <div className="aircraft-intro-header">
              <div>
                <span className="editorial-tag">HISTORICAL RECORD</span>
                <h2 className="section-title-editorial">3.0 ACHIEVEMENTS</h2>
              </div>
              <span className="editorial-tag">VERIFIED FINISHES</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {archive3Achievements.map((ach, idx) => (
                <div key={idx} className="partner-track-card">
                  <span className="editorial-tag red-dot">{ach.year} // {ach.event}</span>
                  <h3 className="track-title">{ach.title}</h3>
                  <p className="track-desc">{ach.description}</p>
                  <div className="editorial-divider" style={{ margin: '1rem 0' }}></div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-red)' }}>
                    RANKING: {ach.ranking}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. 3.0 Competitions */}
        {(activeTab === 'ALL' || activeTab === '3.0 COMPETITIONS') && (
          <div className="section-block">
            <div className="aircraft-intro-header">
              <div>
                <span className="editorial-tag">HISTORICAL CAMPAIGNS</span>
                <h2 className="section-title-editorial">3.0 COMPETITION CAMPAIGNS</h2>
              </div>
              <span className="editorial-tag">CONCLUDED</span>
            </div>

            <div className="missions-case-study-list">
              {archive3Competitions.map((comp) => (
                <div key={comp.id} className="mission-case-study-item">
                  <div className="mission-meta-strip">
                    <span className="mission-serial-tag">{comp.name}</span>
                    <span className="editorial-tag">{comp.type}</span>
                  </div>
                  <h3 className="mission-name-display">{comp.objective}</h3>
                  <p className="mission-objective-text">{comp.challenge}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                    {comp.technologies.map((t) => (
                      <span key={t} className="editorial-tag" style={{ background: '#121212' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. 3.0 Team Roster */}
        {(activeTab === 'ALL' || activeTab === '3.0 TEAM') && (
          <div className="section-block">
            <div className="aircraft-intro-header">
              <div>
                <span className="editorial-tag">HISTORICAL PERSONNEL</span>
                <h2 className="section-title-editorial">3.0 FOUNDING ROSTER & MENTORS</h2>
              </div>
              <span className="editorial-tag">2024 — 2026 TENURE</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
              {archive3TeamMembers.map((m) => (
                <div key={m.name} className="team-member-editorial-card">
                  <span className="editorial-tag">{m.domain}</span>
                  <h3 className="member-role-title">{m.name}</h3>
                  <span className="member-status-line" style={{ color: '#888888' }}>{m.role}</span>
                  <p className="member-resp-text">{m.specialization}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '4rem' }}>
              <span className="editorial-tag" style={{ display: 'block', marginBottom: '1.5rem' }}>FACULTY ADVISORS & MENTORS</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {archive3Mentors.map((mentor) => (
                  <div key={mentor.name} className="team-member-editorial-card">
                    <span className="editorial-tag">{mentor.department}</span>
                    <h4 className="member-role-title">{mentor.name}</h4>
                    <p className="member-resp-text">{mentor.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. 3.0 Sponsors */}
        {(activeTab === 'ALL' || activeTab === '3.0 SPONSORS') && (
          <div className="section-block">
            <div className="aircraft-intro-header">
              <div>
                <span className="editorial-tag">HISTORICAL SOFTWARE LICENSES</span>
                <h2 className="section-title-editorial">3.0 TECHNOLOGY PARTNERS</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {archive3Sponsors.map((s) => (
                <div key={s.name} className="partner-track-card">
                  <h3 className="track-title">{s.name}</h3>
                  <span className="editorial-tag">{s.role}</span>
                  <p className="track-desc">{s.contribution}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
