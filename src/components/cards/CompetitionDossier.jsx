import React, { useState } from 'react';
import { Target, ShieldAlert, Cpu, CheckCircle2, Clock, ChevronDown, ChevronUp, Radio } from 'lucide-react';

export function CompetitionDossier({ competition, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const isCurrent = competition.status.includes('PARTICIPATING');

  return (
    <div className={`competition-dossier-card corner-bracket-box ${isCurrent ? 'current-mission' : ''}`}>
      {/* Top Banner Status */}
      <div className="dossier-top-bar">
        <div className="dossier-id-group">
          <span className="tech-tag tech-tag-red">{competition.badge}</span>
          <span className="dossier-type">{competition.type}</span>
        </div>
        <div className="dossier-status-pill">
          <span className={`status-dot ${isCurrent ? 'active pulse' : ''}`}></span>
          <span className={`dossier-status-text ${isCurrent ? 'status-active' : ''}`}>
            STATUS: {competition.status}
          </span>
        </div>
      </div>

      <div className="dossier-main-content">
        <div className="dossier-title-row">
          <h3 className="dossier-name">{competition.name}</h3>
          <div className="dossier-telemetry-badge">
            <Radio size={13} className="text-red" />
            <span>MISSION DOSSIER // 2026</span>
          </div>
        </div>

        {/* Key Core Grid */}
        <div className="dossier-core-grid">
          <div className="dossier-block">
            <div className="dossier-block-header">
              <Target size={14} className="text-red" />
              <span>OBJECTIVE</span>
            </div>
            <p className="dossier-text">{competition.objective}</p>
          </div>

          <div className="dossier-block">
            <div className="dossier-block-header">
              <ShieldAlert size={14} className="text-red" />
              <span>CHALLENGE</span>
            </div>
            <p className="dossier-text">{competition.challenge}</p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="dossier-approach-block">
          <span className="dossier-approach-label">OUR APPROACH & ARCHITECTURE</span>
          <p className="dossier-approach-text">{competition.ourApproach}</p>
        </div>

        {/* Tech Stack Badges */}
        <div className="dossier-tech-row">
          <span className="dossier-tech-label">DEPLOYED TECHNOLOGIES:</span>
          <div className="dossier-tech-tags">
            {competition.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag tech-tag-red">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Current Preparation / Progress */}
        <div className="dossier-prep-block">
          <span className="prep-label">CURRENT OPERATIONAL PHASE:</span>
          <p className="prep-text">{competition.currentPreparation || competition.currentProgress}</p>
        </div>

        {/* Detailed Expandable Telemetry and Phase Progress */}
        {expanded && (
          <div className="dossier-expanded-section">
            <div className="tech-ruler-line"></div>

            <h4 className="dossier-subheading">MISSION TELEMETRY PROFILE</h4>
            <div className="dossier-telemetry-table">
              {Object.entries(competition.telemetryData).map(([key, val]) => (
                <div key={key} className="telemetry-table-row">
                  <span className="telemetry-key">
                    {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                  </span>
                  <span className="telemetry-val">{val}</span>
                </div>
              ))}
            </div>

            {competition.phases && (
              <div className="dossier-phases-wrap">
                <h4 className="dossier-subheading">DEVELOPMENT MILESTONES</h4>
                <div className="dossier-phases-timeline">
                  {competition.phases.map((ph, pIdx) => (
                    <div key={pIdx} className="phase-step-item">
                      <div className="phase-marker">
                        <span className={`phase-dot ${ph.state === 'COMPLETED' ? 'completed' : ph.state === 'IN PROGRESS' ? 'active' : ''}`}></span>
                      </div>
                      <div className="phase-content">
                        <span className="phase-label">{ph.step} : {ph.name}</span>
                        <span className={`phase-state-badge state-${ph.state.toLowerCase().replace(' ', '-')}`}>
                          [{ph.state}]
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Toggle Detailed Dossier */}
        <div className="dossier-action-bar">
          <button
            className="btn-aerospace btn-aerospace-secondary dossier-toggle-btn"
            onClick={() => setExpanded(!expanded)}
          >
            <span>{expanded ? 'COLLAPSE DOSSIER' : 'VIEW FULL MISSION DOSSIER →'}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
