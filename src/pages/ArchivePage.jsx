import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
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
import {
  Archive,
  ArrowUpRight,
  ShieldAlert,
  Trophy,
  Users,
  Compass,
  Cpu,
  Layers,
  GraduationCap,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

export function ArchivePage() {
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = [
    'ALL',
    '3.0 AIRCRAFT',
    '3.0 ACHIEVEMENTS',
    '3.0 COMPETITIONS',
    '3.0 TEAM ROSTER',
    '3.0 PARTNERS',
    '3.0 TIMELINE',
  ];

  return (
    <div className="archive-page">
      {/* Page Hero */}
      <PageHero
        badge="THE ARCHIVE // PREVIOUS GENERATION"
        title="THE ARCHIVE: IGNITE KNIGHTS"
        highlight="3.0"
        subtitle={archiveGenerationInfo.description}
        telemetry="SYSTEM RECORD // 2024 — 2026 // DECOMMISSIONED & ARCHIVED"
      >
        <div className="flex items-center gap-3 mt-3">
          <GenerationBadge variant="archive" size="md" />
          <span className="font-mono text-xs text-gray-400">
            TENURE: {archiveGenerationInfo.tenure}
          </span>
          <Link to="/" className="btn-aerospace btn-aerospace-sm btn-aerospace-red ml-auto">
            <span>GO TO CURRENT 4.0 SITE →</span>
          </Link>
        </div>
      </PageHero>

      <div className="container py-10">
        {/* Archival Notice Strip */}
        <div className="archive-declaration-banner mb-10">
          <div className="flex items-start gap-3">
            <Archive size={22} className="text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-mono font-bold text-sm">
                CRITICAL ARCHIVAL NOTICE: HISTORICAL GENERATION DATA
              </h3>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                You are viewing the official historical archive of <span className="text-white font-semibold">Ignite Knights 3.0</span>.
                All information, personnel, competition results, and aircraft presented on this page belong exclusively to the 2024–2026 cohort.
                For current 4.0 development aircraft, team, and missions, visit the <Link to="/" className="text-red underline font-semibold">Ignite Knights 4.0 homepage</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Archive Navigation Tabs */}
        <div className="archive-tabs-bar mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`archive-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="tab-indicator"></span>
              <span className="font-mono text-xs">{tab}</span>
            </button>
          ))}
        </div>

        {/* ================================================================
            1. 3.0 AIRCRAFT FLEET (Historical)
           ================================================================ */}
        {(activeTab === 'ALL' || activeTab === '3.0 AIRCRAFT') && (
          <section className="archive-section mb-16">
            <div className="archive-section-header">
              <span className="badge-3-tag font-mono">IGNITE KNIGHTS 3.0 ARCHIVED</span>
              <h2 className="archive-section-title">3.0 AIRCRAFT FLEET</h2>
              <p className="archive-section-desc">
                The decommissioned UAV airframes engineered and flown by Ignite Knights 3.0.
              </p>
            </div>

            <div className="archive-aircraft-grid">
              {archive3Aircraft.map((plane) => (
                <div key={plane.id} className="archive-aircraft-card corner-bracket-box">
                  <div className="aircraft-card-top">
                    <span className="font-mono text-xs text-red">{plane.year} PLATFORM</span>
                    <span className="archive-pill font-mono">{plane.status}</span>
                  </div>

                  <div className="aircraft-card-img-wrap">
                    <img src={plane.image} alt={plane.name} className="aircraft-card-img" />
                    <div className="highlight-tag font-mono">{plane.highlight}</div>
                  </div>

                  <h3 className="aircraft-card-name text-white font-bold text-lg mt-3">{plane.name}</h3>
                  <p className="aircraft-card-desc text-xs text-gray-400 mt-1">{plane.description}</p>

                  <div className="aircraft-specs-table mt-4 pt-3 border-t border-white/10">
                    {plane.specs.map((s, idx) => (
                      <div key={idx} className="spec-row flex items-center justify-between font-mono text-xs py-1">
                        <span className="text-gray-500">{s.label}:</span>
                        <span className="text-gray-200">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================================================================
            2. 3.0 ACHIEVEMENTS (Historical)
           ================================================================ */}
        {(activeTab === 'ALL' || activeTab === '3.0 ACHIEVEMENTS') && (
          <section className="archive-section mb-16">
            <div className="archive-section-header">
              <span className="badge-3-tag font-mono">IGNITE KNIGHTS 3.0 ARCHIVED</span>
              <h2 className="archive-section-title">3.0 KEY ACHIEVEMENTS</h2>
              <p className="archive-section-desc">
                Verified competition finishes and organizational milestones earned during the 3.0 era.
              </p>
            </div>

            <div className="archive-achievements-grid">
              {archive3Achievements.map((ach, idx) => (
                <div key={idx} className="archive-achievement-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="achievement-year font-mono text-red">{ach.year}</span>
                    <span className="achievement-badge-pill font-mono">{ach.badge}</span>
                  </div>

                  <div className="achievement-event font-mono text-xs text-gray-400">{ach.event}</div>
                  <h3 className="achievement-title text-white font-bold text-base mt-1">{ach.title}</h3>
                  <p className="achievement-desc text-xs text-gray-300 mt-2">{ach.description}</p>

                  <div className="achievement-foot font-mono text-xs text-gray-500 mt-3 pt-2 border-t border-white/5">
                    HISTORICAL RECORD VERIFIED
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================================================================
            3. 3.0 COMPETITIONS (Historical)
           ================================================================ */}
        {(activeTab === 'ALL' || activeTab === '3.0 COMPETITIONS') && (
          <section className="archive-section mb-16">
            <div className="archive-section-header">
              <span className="badge-3-tag font-mono">IGNITE KNIGHTS 3.0 ARCHIVED</span>
              <h2 className="archive-section-title">3.0 COMPETITION CAMPAIGNS</h2>
              <p className="archive-section-desc">
                Historical tournament participations and campaigns initiated by the 3.0 cohort.
              </p>
            </div>

            <div className="archive-competitions-stack space-y-6">
              {archive3Competitions.map((comp) => (
                <div key={comp.id} className="archive-competition-card">
                  <div className="comp-card-top flex items-center justify-between">
                    <span className="comp-name text-white font-bold text-base">{comp.name}</span>
                    <span className="comp-status font-mono text-xs text-red">{comp.status}</span>
                  </div>

                  <div className="comp-grid mt-3">
                    <div>
                      <span className="tech-label text-gray-400 block mb-1">OBJECTIVE:</span>
                      <p className="text-xs text-gray-300">{comp.objective}</p>
                    </div>

                    {comp.achievement && (
                      <div className="mt-2">
                        <span className="tech-label text-red block mb-1">3.0 ACHIEVED OUTCOME:</span>
                        <p className="text-xs text-white font-semibold">{comp.achievement}</p>
                      </div>
                    )}

                    {comp.approach && (
                      <div className="mt-2">
                        <span className="tech-label text-gray-400 block mb-1">3.0 TECHNICAL APPROACH:</span>
                        <p className="text-xs text-gray-300">{comp.approach}</p>
                      </div>
                    )}
                  </div>

                  <div className="comp-techs-wrap mt-3 pt-2 border-t border-white/5 flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs text-gray-500">TECH:</span>
                    {comp.technologies.map((t) => (
                      <span key={t} className="tech-pill font-mono text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================================================================
            4. 3.0 TEAM ROSTER (Historical)
           ================================================================ */}
        {(activeTab === 'ALL' || activeTab === '3.0 TEAM ROSTER') && (
          <section className="archive-section mb-16">
            <div className="archive-section-header">
              <span className="badge-3-tag font-mono">IGNITE KNIGHTS 3.0 ARCHIVED</span>
              <h2 className="archive-section-title">3.0 HISTORICAL TEAM ROSTER</h2>
              <p className="archive-section-desc">
                The founding team leadership, core engineers, mentors, and trainees of Ignite Knights 3.0.
              </p>
            </div>

            {/* Core Engineers */}
            <h3 className="roster-subheading text-white font-mono text-sm mb-4">
              // 3.0 CORE ENGINEERING CADRE
            </h3>
            <div className="archive-members-grid mb-10">
              {archive3TeamMembers.map((member) => (
                <div key={member.id} className="archive-member-card">
                  <div className="member-photo-wrap">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="member-photo" />
                    ) : (
                      <div className="member-photo-fallback font-mono">
                        {member.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <span className="member-callsign font-mono">{member.callSign}</span>
                  </div>

                  <div className="member-info">
                    <h4 className="member-name text-white font-bold text-sm">{member.name}</h4>
                    <span className="member-role font-mono text-xs text-red block">{member.role}</span>
                    <span className="member-dept font-mono text-xs text-gray-400 block mb-2">
                      {member.department}
                    </span>
                    <p className="member-bio text-xs text-gray-300">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Faculty Advisors & Mentors */}
            <h3 className="roster-subheading text-white font-mono text-sm mb-4">
              // 3.0 FACULTY ADVISORS & TECHNICAL MENTORS
            </h3>
            <div className="archive-mentors-grid mb-10">
              {archive3Mentors.map((mentor) => (
                <div key={mentor.id} className="archive-mentor-card">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={16} className="text-red" />
                    <span className="badge-pill font-mono text-xs">{mentor.badge}</span>
                  </div>
                  <h4 className="mentor-name text-white font-bold text-sm">{mentor.name}</h4>
                  <span className="mentor-role font-mono text-xs text-red block">{mentor.role}</span>
                  <span className="mentor-org font-mono text-xs text-gray-400 block mb-2">
                    {mentor.title} // {mentor.organization}
                  </span>
                  <p className="mentor-bio text-xs text-gray-300">{mentor.bio}</p>
                </div>
              ))}
            </div>

            {/* Trainees */}
            <h3 className="roster-subheading text-white font-mono text-sm mb-4">
              // 3.0 ENGINEERING TRAINEES
            </h3>
            <div className="archive-trainees-grid">
              {archive3Trainees.map((t, idx) => (
                <div key={idx} className="archive-trainee-card flex items-center gap-3">
                  {t.photo ? (
                    <img src={t.photo} alt={t.name} className="trainee-thumb" />
                  ) : (
                    <div className="trainee-thumb fallback font-mono">{t.name[0]}</div>
                  )}
                  <div>
                    <h5 className="trainee-name text-white font-semibold text-xs">{t.name}</h5>
                    <span className="trainee-role font-mono text-xs text-red block">{t.role}</span>
                    <span className="trainee-dept font-mono text-xs text-gray-400 block">{t.dept}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================================================================
            5. 3.0 PARTNERS & SOFTWARE LICENSES (Historical)
           ================================================================ */}
        {(activeTab === 'ALL' || activeTab === '3.0 PARTNERS') && (
          <section className="archive-section mb-16">
            <div className="archive-section-header">
              <span className="badge-3-tag font-mono">IGNITE KNIGHTS 3.0 ARCHIVED</span>
              <h2 className="archive-section-title">3.0 TECHNOLOGY SPONSORS (9 PARTNERS)</h2>
              <p className="archive-section-desc">
                Engineering software licenses and institutional sponsorships that supported 3.0 R&D.
              </p>
            </div>

            <div className="archive-sponsors-grid">
              {archive3Sponsors.map((sp, idx) => (
                <div key={idx} className="archive-sponsor-item">
                  <div className="sponsor-logo-box">
                    <img
                      src={sp.logo}
                      alt={sp.name}
                      className="sponsor-logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <h4 className="sponsor-name text-white font-bold text-sm mt-2">{sp.name}</h4>
                  <span className="sponsor-category font-mono text-xs text-red block">{sp.category}</span>
                  <p className="sponsor-desc text-xs text-gray-400 mt-1">{sp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================================================================
            6. 3.0 TIMELINE SUMMARY (Historical)
           ================================================================ */}
        {(activeTab === 'ALL' || activeTab === '3.0 TIMELINE') && (
          <section className="archive-section mb-16">
            <div className="archive-section-header">
              <span className="badge-3-tag font-mono">IGNITE KNIGHTS 3.0 ARCHIVED</span>
              <h2 className="archive-section-title">3.0 HISTORICAL TIMELINE SUMMARY</h2>
            </div>

            <div className="archive-timeline-list space-y-4">
              {archive3Timeline.map((item, idx) => (
                <div key={idx} className="archive-timeline-row flex items-start gap-4">
                  <span className="timeline-yr font-mono text-red font-bold text-sm">{item.year}</span>
                  <div>
                    <h4 className="timeline-ph text-white font-semibold text-sm">{item.phase}</h4>
                    <p className="timeline-sm text-xs text-gray-400 mt-0.5">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Return to 4.0 Action Bar */}
        <div className="archive-footer-action-bar text-center py-8 border-t border-white/10">
          <span className="font-mono text-xs text-gray-400 block mb-3">
            END OF 3.0 HISTORICAL RECORD // IGNITE KNIGHTS 4.0 IS THE ACTIVE GENERATION
          </span>
          <Link to="/" className="btn-aerospace btn-aerospace-red">
            <span>PROCEED TO IGNITE KNIGHTS 4.0 HOMEPAGE</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
