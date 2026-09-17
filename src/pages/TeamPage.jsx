import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeader } from '../components/common/SectionHeader';
import { teamMembers, mentorsAndGuides, engineeringTrainees } from '../data/teamData';
import { TeamCard } from '../components/cards/TeamCard';
import { ShieldCheck, UserCheck, GraduationCap, Award } from 'lucide-react';

export function TeamPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterOptions = ['ALL', 'AI', 'MECHANICAL', 'ELECTRONICS', 'SOFTWARE'];

  const filteredMembers =
    activeFilter === 'ALL'
      ? teamMembers
      : teamMembers.filter((m) => m.domain === activeFilter);

  return (
    <div className="team-page">
      {/* Hero */}
      <PageHero
        badge="ENGINEERING CADRE // ROSTER 2026"
        title="THE PEOPLE"
        highlight="BEHIND THE FLIGHT."
        subtitle="Different domains. One mission. Meet the interdisciplinary engineers, developers, and researchers driving Ignite Knights 3.0."
        telemetry="ACTIVE PERSONNEL : 11 CORE // 3 MENTORS // 5 TRAINEES"
      />

      {/* Filter Toolbar */}
      <section className="team-filter-section">
        <div className="container">
          <div className="team-filter-bar corner-bracket-box">
            <div className="filter-label-group">
              <span className="status-dot active"></span>
              <span className="tech-label">DOMAIN DIVISION FILTER:</span>
            </div>

            <div className="filter-buttons-wrap">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  className={`team-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  <span>{filter}</span>
                  {activeFilter === filter && <span className="filter-dot"></span>}
                </button>
              ))}
            </div>

            <div className="filter-count-indicator">
              <span className="tech-label">SHOWING {filteredMembers.length} SPECIALISTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Members Grid */}
      <section className="team-grid-section">
        <div className="container">
          <div className="team-cards-grid">
            {filteredMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Mentors & Faculty Advisors Section */}
      <section className="team-mentors-section">
        <div className="container">
          <SectionHeader
            number="02"
            tag="INSTITUTIONAL OVERSIGHT"
            title="FACULTY GUIDES"
            highlight="& ALUMNI MENTORS"
            subtitle="Guiding our technical trajectory with senior academic guidance and competitive aerospace experience."
          />

          <div className="mentors-grid">
            {mentorsAndGuides.map((guide) => (
              <div key={guide.id} className="mentor-card corner-bracket-box">
                <div className="mentor-header">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-red" />
                    <span className="tech-tag tech-tag-red">{guide.badge}</span>
                  </div>
                  <span className="tech-label">{guide.organization}</span>
                </div>

                <div className="mentor-body">
                  <h3 className="mentor-name">{guide.name}</h3>
                  <p className="mentor-role">{guide.role}</p>
                  <p className="mentor-title">{guide.title}</p>
                  <p className="mentor-bio">{guide.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Trainees Section */}
      <section className="team-trainees-section">
        <div className="container">
          <SectionHeader
            number="03"
            tag="CADRE INITIATION"
            title="ENGINEERING"
            highlight="TRAINEES"
            subtitle="The next generation of avionics, composite, and autonomous systems engineers in rigorous preparation."
          />

          <div className="trainees-grid">
            {engineeringTrainees.map((trainee, idx) => (
              <div key={idx} className="trainee-card corner-bracket-box">
                <div className="trainee-avatar-wrap">
                  {trainee.photo ? (
                    <img src={trainee.photo} alt={trainee.name} className="trainee-img" />
                  ) : (
                    <div className="trainee-fallback">
                      <Award size={24} className="text-faint" />
                    </div>
                  )}
                </div>
                <div className="trainee-details">
                  <h4 className="trainee-name">{trainee.name}</h4>
                  <span className="trainee-role text-red">{trainee.role}</span>
                  <span className="trainee-dept">{trainee.dept}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
