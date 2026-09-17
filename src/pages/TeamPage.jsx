import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { teamMeta, teamCategories, teamDepartments } from '../data/team';
import { ArrowUpRight } from 'lucide-react';

export function TeamPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredDepartments =
    activeCategory === 'ALL'
      ? teamDepartments
      : teamDepartments.filter((d) => d.category === activeCategory);

  return (
    <div className="team-editorial-page">
      {/* Editorial Page Header */}
      <section className="editorial-page-header">
        <div className="container">
          <div className="editorial-header-category">
            <GenerationBadge variant="current" />
          </div>
          <h1 className="editorial-page-title">
            4.0 TEAM DIRECTORY<br />
            <span className="text-red">ENGINEERING COHORT</span>
          </h1>
          <p className="editorial-page-lead">
            {teamMeta.description}
          </p>
        </div>
      </section>

      <section className="container">
        {/* Editorial Discipline Filter */}
        <div className="team-filter-bar">
          {teamCategories.map((cat) => (
            <button
              key={cat}
              className={`team-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Department Roster Sections */}
        {filteredDepartments.map((dept) => (
          <div key={dept.code} className="team-department-editorial-block">
            <div className="department-title-banner">
              <div>
                <span className="editorial-tag red-dot">{dept.code}</span>
                <h2 className="dept-name-large">{dept.name}</h2>
              </div>
              <span className="editorial-tag">{dept.category}</span>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '800px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {dept.description}
            </p>

            <div className="team-roster-editorial-grid">
              {dept.slots.map((slot, idx) => (
                <div key={idx} className="team-member-editorial-card">
                  <span className="editorial-tag">{slot.callSign}</span>
                  <h3 className="member-role-title">{slot.role}</h3>
                  <span className="member-status-line">{slot.status}</span>
                  <p className="member-resp-text">{slot.responsibilities}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 3.0 Historical Team Archive Notice */}
        <div className="archive-hero-banner" style={{ marginTop: '6rem' }}>
          <span className="archive-watermark-tag">HISTORICAL PERSONNEL RECORD</span>
          <h3 className="archive-banner-title">LOOKING FOR 3.0 PERSONNEL?</h3>
          <p className="archive-banner-desc">
            All founding members, team leads, mentors, and trainees of Ignite Knights 3.0 (2024–2026) are permanently preserved and honored in the historical archive.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/archive" className="editorial-text-link" style={{ fontSize: '1.05rem' }}>
              <span>VIEW 3.0 HISTORICAL ROSTER</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
