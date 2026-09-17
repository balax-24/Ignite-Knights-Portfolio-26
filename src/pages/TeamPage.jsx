import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { teamMeta, teamCategories, teamDepartments, real4TeamMembers } from '../data/team';
import {
  Users,
  Shield,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  Archive,
  ArrowUpRight,
  Clock,
  Briefcase,
} from 'lucide-react';

export function TeamPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredDepartments =
    activeCategory === 'ALL'
      ? teamDepartments
      : teamDepartments.filter((d) => d.category === activeCategory);

  return (
    <div className="team-page">
      {/* Page Hero Header */}
      <PageHero
        badge="IGNITE KNIGHTS 4.0 // DIRECTORY"
        title="4.0 TEAM"
        highlight="DIRECTORY"
        subtitle={teamMeta.description}
        telemetry="IK-04 // ROSTER CERTIFICATION MODE"
      >
        <div className="flex items-center gap-3 mt-2">
          <GenerationBadge variant="current" size="sm" />
          <span className="tech-badge-dot active"></span>
          <span className="font-mono text-xs text-red">{teamMeta.status}</span>
        </div>
      </PageHero>

      <div className="container py-8">
        {/* Prominent Official Roster Status Banner */}
        <div className="roster-status-banner mb-10">
          <div className="banner-left">
            <div className="flex items-center gap-2 mb-1">
              <Clock size={16} className="text-red animate-pulse" />
              <span className="tech-label text-red">OFFICIAL ANNOUNCEMENT NOTICE</span>
            </div>
            <h3 className="banner-title text-white font-bold text-lg">
              4.0 ENGINEERING ROSTER CERTIFICATION IN PROGRESS
            </h3>
            <p className="banner-desc text-sm text-gray-400">
              The incoming 4.0 cohort is finalizing subsystem leadership allocations and lab assignments across our five specialized engineering divisions. The directory structure below outlines our departmental organization.
            </p>
          </div>

          <div className="banner-right flex items-center">
            <Link to="/archive" className="btn-aerospace btn-aerospace-archive-cta">
              <Archive size={14} />
              <span>VIEW 3.0 ROSTER ARCHIVE →</span>
            </Link>
          </div>
        </div>

        {/* Division Filter Navigation */}
        <div className="team-category-nav mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="tech-tag tech-tag-red">DEPARTMENTAL DIVISIONS</span>
            <span className="font-mono text-xs text-gray-400">SELECT ENGINEERING SPECIALTY</span>
          </div>

          <div className="category-tabs-wrap">
            {teamCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span className="tab-dot"></span>
                <span className="font-mono text-xs">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Departmental Structure & Allocation Slots */}
        <div className="departments-stack space-y-10">
          {filteredDepartments.map((dept) => (
            <div key={dept.code} className="department-block">
              <div className="dept-header-bar">
                <div className="flex items-center gap-3">
                  <span className="dept-code-tag font-mono">{dept.code}</span>
                  <h3 className="dept-name text-white font-bold">{dept.name}</h3>
                </div>
                <span className="dept-category-badge font-mono">{dept.category}</span>
              </div>

              <p className="dept-description text-sm text-gray-400 mb-6">{dept.description}</p>

              {/* Roster Slots Grid */}
              <div className="slots-grid">
                {dept.slots.map((slot, sIdx) => (
                  <div key={sIdx} className="slot-card">
                    <div className="slot-card-header">
                      <span className="slot-callsign font-mono text-red">{slot.callSign}</span>
                      <span className="slot-status-pill font-mono">{slot.status}</span>
                    </div>

                    <h4 className="slot-role text-white font-semibold mt-2">{slot.role}</h4>
                    <div className="slot-dept font-mono text-xs text-gray-400 mb-3">{slot.department}</div>

                    <div className="slot-responsibilities-box font-mono text-xs">
                      <span className="text-gray-500 block mb-1">CORE MANDATE:</span>
                      <span className="text-gray-300">{slot.responsibilities}</span>
                    </div>

                    <div className="slot-footer-state mt-4 flex items-center justify-between font-mono text-xs text-gray-500">
                      <span>VERIFICATION: PENDING</span>
                      <span className="text-red">GEN 4.0</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Previous Generation 3.0 Roster Portal */}
        <section className="team-archive-bridge mt-16">
          <div className="bridge-inner">
            <div className="bridge-left">
              <GenerationBadge variant="archive" size="sm" />
              <h3 className="bridge-title mt-2">
                LOOKING FOR IGNITE KNIGHTS 3.0 MEMBERS & LEADERSHIP?
              </h3>
              <p className="bridge-desc">
                The 3.0 founding engineers (Mithra Niranjan P, Rakshanasri E, Dhiraj J S, Shakthivel T V, and core teammates), faculty guides, and trainees are permanently recorded in the 3.0 Historical Archive.
              </p>
            </div>
            <div className="bridge-right">
              <Link to="/archive" className="btn-aerospace btn-aerospace-archive-cta">
                <Archive size={15} />
                <span>INSPECT 3.0 ROSTER ARCHIVE →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
