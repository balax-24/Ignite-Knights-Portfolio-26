import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { missionsMeta, missionsData } from '../data/missions';
import {
  Target,
  Crosshair,
  Compass,
  CheckCircle2,
  AlertCircle,
  Archive,
  ArrowUpRight,
  Layers,
  Activity,
  Cpu,
  ShieldAlert,
} from 'lucide-react';

export function MissionsPage() {
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  const statusList = ['ALL', 'PLANNING', 'DESIGN', 'FABRICATION', 'INTEGRATION', 'TESTING', 'FLIGHT READY'];

  const filteredMissions =
    selectedStatus === 'ALL'
      ? missionsData
      : missionsData.filter((m) => m.status === selectedStatus);

  return (
    <div className="missions-page">
      {/* Page Hero Header */}
      <PageHero
        badge="IGNITE KNIGHTS 4.0 // MISSIONS"
        title="CURRENT MISSIONS &"
        highlight="OPERATIONAL CHALLENGES"
        subtitle={missionsMeta.description}
        telemetry="IK-04 // 4.0 MISSION PIPELINE ACTIVE"
      >
        <div className="flex items-center gap-3 mt-2">
          <GenerationBadge variant="current" size="sm" />
          <span className="tech-badge-dot active"></span>
          <span className="font-mono text-xs text-red">{missionsMeta.subtitle}</span>
        </div>
      </PageHero>

      <div className="container py-8">
        {/* Status Filter Bar */}
        <div className="missions-filter-bar mb-10">
          <div className="flex items-center gap-2 mb-3 md:mb-0">
            <span className="tech-tag tech-tag-red">FILTER BY STAGE</span>
            <span className="font-mono text-xs text-gray-400">4.0 DEVELOPMENT STAGES</span>
          </div>

          <div className="missions-filter-chips">
            {statusList.map((st) => (
              <button
                key={st}
                type="button"
                className={`filter-chip ${selectedStatus === st ? 'active' : ''}`}
                onClick={() => setSelectedStatus(st)}
              >
                <span className="chip-dot"></span>
                <span className="font-mono text-xs">{st}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mission Dossiers Stack */}
        <div className="mission-dossiers-stack space-y-8">
          {filteredMissions.map((mission, idx) => (
            <div key={mission.id} className="mission-dossier-card">
              {/* Dossier Top Bar */}
              <div className="dossier-top-bar">
                <div className="flex items-center gap-3">
                  <span className="mission-code-badge font-mono">{mission.code}</span>
                  <span className="mission-year-badge font-mono">SEASON {mission.year}</span>
                  <span className="tech-label text-gray-400">{mission.category}</span>
                </div>

                <div className="dossier-status-pill font-mono">
                  <span className="status-dot active"></span>
                  <span>STATUS: {mission.status}</span>
                </div>
              </div>

              {/* Dossier Main Content */}
              <div className="dossier-body">
                <div className="dossier-title-row">
                  <h3 className="dossier-title">{mission.name}</h3>
                  <span className="font-mono text-xs text-red">{mission.pipelineStage}</span>
                </div>

                {/* Objective Block */}
                <div className="dossier-objective-block">
                  <div className="flex items-center gap-2 mb-1">
                    <Target size={14} className="text-red" />
                    <span className="tech-label text-red">MISSION OBJECTIVE</span>
                  </div>
                  <div className="objective-text font-mono text-xs text-white">
                    {mission.objective}
                  </div>
                </div>

                {/* Challenge Description */}
                <div className="dossier-challenge-block mb-4">
                  <span className="tech-label text-gray-400 mb-1 block">AERONAUTICAL CHALLENGE:</span>
                  <p className="challenge-desc text-gray-300 text-sm">{mission.challenge}</p>
                </div>

                {/* System Requirements Breakdown */}
                <div className="dossier-requirements-block mb-4">
                  <span className="tech-label text-gray-400 mb-2 block">MANDATORY SYSTEM REQUIREMENTS:</span>
                  <div className="requirements-grid">
                    {mission.systemRequirements.map((req, rIdx) => (
                      <div key={rIdx} className="req-item">
                        <CheckCircle2 size={13} className="text-red flex-shrink-0" />
                        <span className="font-mono text-xs text-gray-200">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Stack */}
                <div className="dossier-tech-row">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="tech-label text-gray-400">TECHNOLOGIES:</span>
                    {mission.technologies.map((tech) => (
                      <span key={tech} className="tech-badge font-mono">{tech}</span>
                    ))}
                  </div>

                  <div className="dossier-environment-tag font-mono text-xs text-gray-500">
                    ENV: {mission.telemetryData.flightEnvironment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Historical Competitions Archive Portal */}
        <section className="missions-archive-portal mt-16">
          <div className="archive-portal-inner">
            <div className="flex items-center gap-3 mb-2">
              <GenerationBadge variant="archive" size="sm" />
              <span className="font-mono text-xs text-gray-400">HISTORICAL RECORD</span>
            </div>

            <h3 className="portal-heading">
              LOOKING FOR 3.0 COMPETITION CAMPAIGNS & ACHIEVEMENTS?
            </h3>

            <p className="portal-text">
              Campaigns such as <span className="text-white font-semibold">SAE ADDC 2025 (Top 10 National Finish)</span>, 
              <span className="text-white font-semibold"> NIDAR 2026</span>, and 
              <span className="text-white font-semibold"> AERATHON 2026</span> belong to the previous generation (Ignite Knights 3.0) and are archived for historical attribution.
            </p>

            <div className="mt-4">
              <Link to="/archive" className="btn-aerospace btn-aerospace-archive-cta">
                <Archive size={14} />
                <span>INSPECT 3.0 COMPETITIONS ARCHIVE →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
